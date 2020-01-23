import React from "react";
import Select from "react-select";

async function fetchCoinInfo(coinLabel, updateCb) {
  var ENDPOINT = new URL("https://min-api.cryptocompare.com/data/price");
  var params = {
    fsym: coinLabel,
    tsyms: "USD"
  };

  ENDPOINT.search = new URLSearchParams(params).toString();
  console.log("Endpoint", ENDPOINT);
  fetch(ENDPOINT)
    .then(res => res.json())
    .then(updateCb);
}

const Coins = [
  {
    label: "BTC",
    sym: "BITSTAMP:BTCUSD",
    value: 1,
    clogo: "https://www.cryptocompare.com/media/19633/btc.png"
  },
  {
    label: "ETH",
    sym: "KRAKEN:ETHUSD",
    value: 2,
    clogo: "https://www.cryptocompare.com/media/20646/eth_logo.png"
  },
  {
    label: "LTC",
    sym: "KRAKEN:LTCUSD",
    value: 3,
    clogo: "https://www.cryptocompare.com/media/35309662/ltc.png"
  },
  {
    label: "XRP",
    sym: "BITFINEX:XRPUSD",
    value: 4,
    clogo: "https://www.cryptocompare.com/media/34477776/xrp.png"
  }
];

const Coinform = ({ setAmount, setCoin, handleClick }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Select
              placeholder="Select Coin"
              options={Coins}
              onChange={value => {
                fetchCoinInfo(value.label, val => {
                  setCoin({ ...value, rate: val });
                });
              }}
            />
          </div>
          <div className="col-md-4">
            <input
              placeholder="Enter Amount"
              className="joinInput"
              type="text"
              onChange={event => setAmount(event.target.value)}
            />
          </div>
          <div className="col-md-4">
            <button
              onClick={handleClick}
              className="button mt-20"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coinform;
