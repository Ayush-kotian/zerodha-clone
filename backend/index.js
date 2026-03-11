require("dotenv").config();
const express=require("express");
const mongoose = require("mongoose");
const {HoldingsModel}=require('./model/HoldingsModel');
const {PositionsModel}=require('./model/PositionsModel');
const { OrdersModel } = require("./model/OrdersModel");
const app=express();
const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL;
const bodyParser=require("body-parser");
app.use(bodyParser.json());
const cors=require("cors");
app.use(cors())
main()
.then(()=>console.log("Db connected"))
.catch(err => console.log(err));
async function main() {
  await mongoose.connect(uri);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.get('/allHoldings',async(req,res)=>{
let allholdings=await HoldingsModel.find({});
res.json(allholdings)
});
app.get('/allPositions',async(req,res)=>{
let allPositions=await PositionsModel.find({});
res.json(allPositions);
});
app.post('/newOrder', async (req, res) => {

  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: Number(req.body.qty),
    price:  Number(req.body.price) || 0,
    mode: req.body.mode
  });

  await newOrder.save();

  if (req.body.mode === "BUY") {

    let newHolding = new HoldingsModel({
      name: req.body.name,
      qty: Number(req.body.qty),
      avg: Number(req.body.price),
      price: Number(req.body.price),
      net: "+0.00%",
      day: "+0.00%",
    });

    await newHolding.save();
  }

  else if (req.body.mode === "SELL") {

    let sellQty = Number(req.body.qty);

    let holdings = await HoldingsModel
      .find({ name: req.body.name })
      .sort({ _id: 1 }); // FIFO

    // calculate total shares owned
    let totalQty = holdings.reduce((sum, h) => sum + h.qty, 0);

    if (sellQty > totalQty) {
      return res.status(400).send("Not enough shares to sell");
    }

    for (let holding of holdings) {

      if (sellQty <= 0) break;

      if (holding.qty <= sellQty) {
        sellQty -= holding.qty;
        await HoldingsModel.deleteOne({ _id: holding._id });
      }
      else {
        holding.qty -= sellQty;
        await holding.save();
        sellQty = 0;
      }
    }
  }

  res.send("Order done");
});
// app.get('/addData',async(req,res)=>{
//  let data= [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//  let addPos=await PositionsModel.insertMany(data);
// console.log(addPos);
// res.send("done");
// });
app.listen(PORT,()=>{
    console.log("App started");
    // console.log(uri)
    // console.log("DB connected..")
})