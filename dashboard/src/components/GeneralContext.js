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
});

export const GeneralContextProvider = (props) => {

  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState("");

  const openBuyWindow = (uid) => {
    setSelectedStock(uid);
    setIsBuyOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyOpen(false);
  };

  const openSellWindow = (uid) => {
    setSelectedStock(uid);
    setIsSellOpen(true);
  };

  const closeSellWindow = () => {
    setIsSellOpen(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow
      }}
    >
      {props.children}

      {isBuyOpen && <BuyWindow uid={selectedStock} />}
      {isSellOpen && <SellWindow uid={selectedStock} />}

    </GeneralContext.Provider>
  );
};

export default GeneralContext;