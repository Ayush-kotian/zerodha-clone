
// import React from "react";
// import { Link } from "react-router-dom";

// import GeneralContext from "./GeneralContext";

// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid }) => {

//   const handleBuyClick = () => {
//     // GeneralContext.closeBuyWindow();
//   };

//   const handleCancelClick = () => {
//     GeneralContext.closeBuyWindow();
//   };

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//           <Link className="btn btn-blue" onClick={handleBuyClick}>
//             Buy
//           </Link>
//           <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;
import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  let [stockQuantity,setStockQuantity]=useState(1);
  let [stockPrice,setStockPrice]=useState("0.0");
  const [position, setPosition] = useState({ x: 500, y: 200 });
  const [dragging, setDragging] = useState(false);
   const [orderSuccess, setOrderSuccess] = useState(false);
   const generalContext = useContext(GeneralContext);
const handleBuyClick = async () => {
  await axios.post("http://localhost:3002/newOrder", {
    name: uid,
    qty: stockQuantity,
    price: stockPrice,
    mode: "BUY"
  });

  setOrderSuccess(true);

  setTimeout(() => {
    generalContext.closeBuyWindow();
  }, 1600);
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

  /* listen mouse on entire document */
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  // const handleBuyClick = () => {
  //   console.log("Buy clicked");
  // };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };
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
            <input type="number" onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity}/>
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input type="number" step="0.05" onChange={(e)=>setStockPrice(e.target.value)} value={stockPrice}/>
          </fieldset>

        </div>
        <div style={{marginTop: "20px"}}>{orderSuccess && (
    <p className="success" style={{color:"green"}}>✓ Order placed successfully</p>
  )}</div>
      </div>

      <div className="buttons">

        <span>Margin required ₹{stockPrice * stockQuantity}</span>
          

        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>

          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default BuyActionWindow;