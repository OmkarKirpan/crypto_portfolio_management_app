import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Detail = ({ symbol }) => {
  return (
    <div>
      <TradingViewWidget
        symbol={symbol ? symbol : "BITSTAMP:BTCUSD"}
        theme={Themes.DARK}
      />
    </div>
  );
};

export default Detail;
