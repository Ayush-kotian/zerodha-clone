import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import GeneralContext from "./GeneralContext";
// import { all } from "axios";
import {VerticalGraph} from "./VerticalGraph";
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const { refreshKey } = useContext(GeneralContext);
 
  useEffect(() => {
    api.get("/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch(() => {
        setAllHoldings([]);
      });
  }, [refreshKey]);

  const topHoldings = [...allHoldings]
    .map((stock) => ({
      ...stock,
      currValue: stock.price * stock.qty,
    }))
    .sort((a, b) => b.currValue - a.currValue)
    .slice(0, 10);

  const labels = topHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: `Top ${topHoldings.length} Holdings by Current Value`,
        data: topHoldings.map((stock) => stock.currValue),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const totalInvestment = allHoldings.reduce((sum, stock) => sum + (stock.avg * stock.qty), 0);
  const currentValue = allHoldings.reduce((sum, stock) => sum + (stock.price * stock.qty), 0);
  const pnl = currentValue - totalInvestment;

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg}</td>
                  <td>{stock.price}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profitClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currentValue.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{pnl.toFixed(2)}</h5>
          <p>P&amp;L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
