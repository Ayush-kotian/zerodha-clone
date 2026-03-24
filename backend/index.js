require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./model/UserModel");
const { requireAuth } = require("./authMiddleware");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const isProduction = process.env.NODE_ENV === "production";
const JWT_SECRET = process.env.JWT_SECRET;

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean);

app.use(express.json());

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(cookieParser());

const requireEnv = (value, envName) => {
  if (!value) {
    throw new Error(`${envName} is missing. Add it to backend/.env`);
  }
};

const handleUnexpectedError = (error) => {
  console.error("Unexpected server error:", error);
};

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error.message);
});

process.on("unhandledRejection", handleUnexpectedError);
process.on("uncaughtException", handleUnexpectedError);

const createToken = (user) => {
  return jwt.sign(
    {
      userId: user._id.toString(),
      name: user.name,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "7d" },
  );
};

const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

const normalizeEmail = (email) => email?.trim().toLowerCase();

const processOrder = async ({
  userId,
  name,
  mode,
  qty,
  price,
  session = null,
}) => {
  if (mode === "SELL") {
    let sellQty = qty;

    // FIFO should use the oldest holding lot first.
    const holdingsQuery = HoldingsModel.find({ userId, name }).sort({
      createdAt: 1,
      _id: 1,
    });
    const holdings = session
      ? await holdingsQuery.session(session)
      : await holdingsQuery;
    const totalQty = holdings.reduce((sum, holding) => sum + holding.qty, 0);

    if (sellQty > totalQty) {
      const error = new Error("Not enough shares to sell");
      error.statusCode = 400;
      throw error;
    }

    for (const holding of holdings) {
      if (sellQty <= 0) break;

      if (holding.qty <= sellQty) {
        sellQty -= holding.qty;

        if (session) {
          await HoldingsModel.deleteOne({ _id: holding._id }, { session });
        } else {
          await HoldingsModel.deleteOne({ _id: holding._id });
        }
      } else {
        holding.qty -= sellQty;

        if (session) {
          await holding.save({ session });
        } else {
          await holding.save();
        }

        sellQty = 0;
      }
    }
  }

  if (mode === "BUY") {
    const newHolding = new HoldingsModel({
      userId,
      name,
      qty,
      avg: price,
      price,
      net: "+0.00%",
      day: "+0.00%",
    });

    if (session) {
      await newHolding.save({ session });
    } else {
      await newHolding.save();
    }
  }

  const newOrder = new OrdersModel({
    userId,
    name,
    qty,
    price,
    mode,
  });

  if (session) {
    await newOrder.save({ session });
  } else {
    await newOrder.save();
  }
};

app.post("/auth/register", async (req, res) => {
  try {
    const name = req.body.name?.trim();
    const email = normalizeEmail(req.body.email);
    const password = req.body.password;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const existingUser = await UserModel.findOne({
      email,
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = createToken(user);
    res.cookie("token", token, cookieOptions);

    return res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const email = normalizeEmail(req.body.email);
    const password = req.body.password;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await UserModel.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createToken(user);
    res.cookie("token", token, cookieOptions);

    return res.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.get("/auth/me", requireAuth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.post("/auth/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  });

  return res.json({ message: "Logged out successfully" });
});

app.get("/allHoldings", requireAuth, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({ userId: req.user.userId });
    return res.json(allHoldings);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.get("/allPositions", requireAuth, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({ userId: req.user.userId });
    return res.json(allPositions);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

app.get("/allOrders", requireAuth, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({ userId: req.user.userId }).sort({
      _id: -1,
    });
    return res.json(allOrders);
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});
app.post("/newOrder", requireAuth, async (req, res) => {
  const userId = req.user.userId;
  const name = req.body.name?.trim();
  const { mode } = req.body;
  const qty = Number(req.body.qty);
  const price = Number(req.body.price);

  if (!name) {
    return res.status(400).json({ message: "Stock name is required" });
  }

  if (!["BUY", "SELL"].includes(mode)) {
    return res.status(400).json({ message: "Invalid order mode" });
  }

  if (!Number.isFinite(qty) || qty <= 0) {
    return res.status(400).json({ message: "Quantity must be greater than 0" });
  }

  if (!Number.isFinite(price) || price <= 0) {
    return res.status(400).json({ message: "Price must be greater than 0" });
  }

  let session = null;

  try {
    session = await mongoose.startSession();

    try {
      await session.withTransaction(async () => {
        await processOrder({ userId, name, mode, qty, price, session });
      });
    } catch (error) {
      const transactionUnsupported =
        error?.message?.includes(
          "Transaction numbers are only allowed on a replica set member",
        ) ||
        error?.message?.includes(
          "Transaction numbers are only allowed on a replica set",
        );

      if (transactionUnsupported) {
        await processOrder({ userId, name, mode, qty, price });
      } else {
        throw error;
      }
    }

    return res.json({ message: "Order done" });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    return res
      .status(statusCode)
      .json({ message: statusCode === 500 ? "Server error" : error.message });
  } finally {
    if (session) {
      await session.endSession();
    }
  }
});
main().catch((error) => {
  console.error("Failed to start server");
  console.error(error.message);

  if (error.name === "MongooseServerSelectionError") {
    console.error(
      "MongoDB could not be reached. Check your internet, Atlas IP whitelist, and MONGO_URL.",
    );
  }

  process.exit(1);
});

async function main() {
  requireEnv(uri, "MONGO_URL");
  requireEnv(JWT_SECRET, "JWT_SECRET");

  console.log("Connecting to MongoDB...");

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 10000,
  });

  console.log("DB connected");

  app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
  });
}
// app.get("/addData", requireAuth, async (req, res) => {
//   try {
//     const data = [
//        {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
//     ].map((holding) => ({
//       ...holding,
//       userId: req.user.userId,
//     }));

//     const addedHoldings = await HoldingsModel.insertMany(data);
//     return res.json({ message: "Holdings added", data: addedHoldings });
//   } catch (error) {
//     return res.status(500).json({ message: "Server error" });
//   }
// });
