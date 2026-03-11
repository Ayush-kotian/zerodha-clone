import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {

  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [position, setPosition] = useState({ x: 500, y: 200 });
  const [dragging, setDragging] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSellClick = async () => {

    try {

      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: stockQuantity,
        mode: "SELL"
      });

      setError("");
      setOrderSuccess(true);

      setTimeout(() => {
        generalContext.closeSellWindow();
      }, 1500);

    } catch (err) {

      setOrderSuccess(false);

      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError("Server error");
      }

    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - 180,
        y: e.clientY - 80
      });
    }
  };

  useEffect(() => {

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

  });

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
              value={stockQuantity}
              onChange={(e)=>setStockQuantity(e.target.value)}
            />

          </fieldset>

        </div>

        <div style={{marginTop:"20px"}}>

          {orderSuccess && (
            <p style={{color:"green"}}>✓ Sell order placed</p>
          )}

          {error && (
            <p style={{color:"red"}}>{error}</p>
          )}

        </div>

      </div>

      <div className="buttons">

        <span>Selling {stockQuantity} shares</span>

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