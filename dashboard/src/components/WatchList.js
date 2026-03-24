import React, { useState,useContext } from "react";
import { watchlist } from "../data/data";
import {Tooltip,Grow} from "@mui/material";
import {KeyboardArrowUp,KeyboardArrowDown, BarChartOutlined, MoreHoriz} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";
let labels=watchlist.map((subArray) =>subArray["name"]);
const WatchList = () => {
   const data = {
  labels,
  datasets: [
    {
      label: 'Stock Price',
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={data}/>
      <br></br>
    </div>
  );
};
export default WatchList;
let WatchListItem=({stock})=>{
const [showWatchlistAction,setshowWatchlistAction]=useState(false);
const handleMouseEnter=()=>{
setshowWatchlistAction(true);
}
const handleMouseLeave=()=>{
setshowWatchlistAction(false);
}
return(
  <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
   <div className="item">
    <p className={stock.isDown ? "down" :"up"}>{stock.name}</p>
    <div className="item-info">
      <span className="percent">{stock.percent}</span>
      <span className={stock.isDown ? "down" :"up"} style={{padding:"0.5em"}}>{stock.isDown? (<KeyboardArrowDown/>) : (<KeyboardArrowUp/>) }</span>
      <span className="price">{stock.price}</span>
    </div>
   </div>
   {showWatchlistAction && <WatchListAction uid={stock.name} price={stock.price} />}
  </li>
)
}
const WatchListAction=({uid, price})=>{
  const generalContext = useContext(GeneralContext);
   const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };  

  const handleSellClick = () => {
    generalContext.openSellWindow(uid, price);
  };

  return(
    <div className="actions">
      <span className="tooltip">
           <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} >
        <button className="buy" onClick={handleBuyClick}>
          Buy
        </button>
      </Tooltip>
       <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow} >
        <button className="sell" onClick={handleSellClick}>
          Sell
        </button>
      </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow} >
        <button className="action"><BarChartOutlined fontSize="small"/></button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow} >
        <button className="action"><MoreHoriz fontSize="small"/></button>
      </Tooltip>
      </span>
    </div>
  );
};
