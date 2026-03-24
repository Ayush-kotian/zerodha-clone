import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { refreshKey } = useContext(GeneralContext);

  useEffect(() => {
    api.get("/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch(() => {
        setOrders([]);
      });
  }, [refreshKey]);

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>No orders placed yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Type</th>
              <th>Qty.</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td className={order.mode === "BUY" ? "profit" : "loss"}>{order.mode}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
