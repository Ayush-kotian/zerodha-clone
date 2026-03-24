import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, initialPrice }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(initialPrice || 0);
  const [position, setPosition] = useState({ x: 500, y: 200 });
  const [dragging, setDragging] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSellClick = async () => {
    const quantity = Number(stockQuantity);
    const price = Number(stockPrice);

    if (!Number.isFinite(quantity) || quantity <= 0) {
      setOrderSuccess(false);
      setError("Enter a quantity greater than 0");
      return;
    }

    if (!Number.isFinite(price) || price <= 0) {
      setOrderSuccess(false);
      setError("Enter a price greater than 0");
      return;
    }

    try {
      await api.post("/newOrder", {
        name: uid,
        qty: quantity,
        price,
        mode: "SELL"
      });

      setError("");
      setOrderSuccess(true);
      generalContext.refreshTradingData();

      setTimeout(() => {
        generalContext.closeSellWindow();
      }, 1500);
    } catch (err) {
      setOrderSuccess(false);
      setError(err.response?.data?.message || "Server error");
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        setPosition({
          x: e.clientX - 180,
          y: e.clientY - 80
        });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div
      className="container"
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
    >
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              min="0.01"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>

        <div style={{ marginTop: "20px" }}>
          {orderSuccess && (
            <p style={{ color: "green" }}>Sell order placed</p>
          )}

          {error && (
            <p style={{ color: "red" }}>{error}</p>
          )}
        </div>
      </div>

      <div className="buttons">
        <span>Selling {stockQuantity} shares at Rs. {Number(stockPrice || 0)}</span>

        <div>
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>

          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
