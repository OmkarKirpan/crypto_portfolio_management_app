import React, { useState } from "react";
import Portfolio from "./portfolio";
import CoinForm from "./coinform";
import TotalAmount from "./TotalAmount";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Home = () => {
  const [coin, setCoin] = useState("");
  const [amount, setAmount] = useState("");
  const [portfolio, setPortfolio] = useState([]);

  const handleClick = () => {
    let cprice = parseFloat(amount) * parseFloat(coin.rate.USD);
    let newPortfolio = {
      amount,
      coin,
      cprice
    };
    setPortfolio([...portfolio, newPortfolio]);
  };

  return (
    <div>
      <CoinForm
        setCoin={setCoin}
        setAmount={setAmount}
        handleClick={handleClick}
      />
      <Portfolio portfolio={portfolio} />
      <TotalAmount portfolio={portfolio} />
    </div>
  );
};

export default Home;
