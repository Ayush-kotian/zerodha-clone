import React, { useState } from "react";
import { watchlist } from "../data/data";
import {Tooltip,Grow} from "@mui/material";
import {KeyboardArrowUp,KeyboardArrowDown, BarChartOutlined, MoreHoriz} from "@mui/icons-material";
import BarChartIcon from '@mui/icons-material/BarChart';
const WatchList = () => {
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
        {watchlist.map((stock,index)=>{
          return (
           <WatchListItem stock={stock} key={index}/>
          )
        })}
      </ul>
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
    <div className="itemInfo">
      <span className="percent">{stock.percent}</span>
      <span className={stock.isDown ? "down" :"up"} style={{padding:"0.5em"}}>{stock.isDown? (<KeyboardArrowDown/>) : (<KeyboardArrowUp/>) }</span>
      <span className="price">{stock.price}</span>
    </div>
   </div>
   {showWatchlistAction && <WatchListAction uid={stock.name}/>}
  </li>
)
}
const WatchListAction=({uid})=>{
  return(
    <div className="actions">
      <span className="tooltip">
           <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} >
        <button className="buy">Buy</button>
      </Tooltip>
       <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow} >
        <button className="sell">Sell</button>
      </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow} >
        <button className="action"><BarChartOutlined fontSize="small"/></button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow} >
        <button className="action"><MoreHoriz fontSize="small"/></button>
      </Tooltip>
      </span>
    </div>
  )
}