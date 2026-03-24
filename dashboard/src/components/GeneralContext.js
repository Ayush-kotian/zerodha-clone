// import React, { useState } from "react";

// import BuyActionWindow from "./BuyActionWindow";

// const GeneralContext = React.createContext({
//   openBuyWindow: (uid) => {},
//   closeBuyWindow: () => {},
//   openSellWindow: (uid) => {},
//   closeSellWindow: () => {},
// });
// export const GeneralContextProvider = (props) => {
//   const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
//   const [selectedStockUID, setSelectedStockUID] = useState("");

//   const handleOpenBuyWindow = (uid) => {
//     setIsBuyWindowOpen(true);
//     setSelectedStockUID(uid);
//   };

//   const handleCloseBuyWindow = () => {
//     setIsBuyWindowOpen(false);
//     setSelectedStockUID("");
//   };

//   return (
//     <GeneralContext.Provider
//       value={{
//         openBuyWindow: handleOpenBuyWindow,
//         closeBuyWindow: handleCloseBuyWindow,
//       }}
//     >
//       {props.children}
//       {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
//     </GeneralContext.Provider>
//   );
// };

// export default GeneralContext;
import React, { useState } from "react";
import BuyWindow from "./BuyActionWindow";
import SellWindow from "./SellWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  refreshTradingData: () => {},
  refreshKey: 0,
});

export const GeneralContextProvider = (props) => {

  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedSellPrice, setSelectedSellPrice] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  const openBuyWindow = (uid) => {
    setSelectedStock(uid);
    setIsBuyOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyOpen(false);
  };

  const openSellWindow = (uid, price = 0) => {
    setSelectedStock(uid);
    setSelectedSellPrice(price);
    setIsSellOpen(true);
  };

  const closeSellWindow = () => {
    setIsSellOpen(false);
  };

  const refreshTradingData = () => {
    setRefreshKey((currentKey) => currentKey + 1);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
        refreshTradingData,
        refreshKey
      }}
    >
      {props.children}

      {isBuyOpen && <BuyWindow uid={selectedStock} />}
      {isSellOpen && <SellWindow uid={selectedStock} initialPrice={selectedSellPrice} />}

    </GeneralContext.Provider>
  );
};

export default GeneralContext;
