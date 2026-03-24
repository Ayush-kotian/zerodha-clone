import React from "react";
import api from "../api";
import { useEffect } from "react";
import { useState } from "react";
// import { positions } from "../data/data";
const Positions = () => {
  let [allPositions,setallPositions]=useState([]);
       useEffect(()=>{
  api.get("/allPositions")
  .then((res)=>{
    setallPositions(res.data);
  })
  .catch(() => {
    setallPositions([]);
  });
  },[]);
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
           {allPositions.map((stock,index)=>{
                     const CurrValue=stock.price*stock.qty;
                     const isProfit=CurrValue-stock.avg*stock.qty>=0.0;
                     const profClass= isProfit ? "profit" : "loss";
                     const dayClass = stock.isLoss ? "loss" : "profit";
                     return(
                      <tr>
                        <td>{stock.product}</td>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.avg.toFixed(2)}</td>
                        <td>{stock.price}</td>
                        <td className={profClass}>{(CurrValue-stock.avg*stock.qty).toFixed(2)}</td>
                        <td className={dayClass}>{stock.day}</td>
                      </tr>
                     )
                    })}
        </table>
      </div>
    </>
  );
};

export default Positions;
