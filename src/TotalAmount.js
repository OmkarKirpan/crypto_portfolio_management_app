import React from "react";
import Currency from "react-currency-formatter";

const TotalAmount = ({ portfolio }) => {
  let totalSum = 0;
  if (portfolio.length) {
    portfolio.map(val => {
      totalSum += parseInt(val.cprice);
    });
  }
  return (
    <div>
      <h3>
        Total Amount in portfolio (in USD):{" "}
        <Currency quantity={totalSum} currency="USD" />
      </h3>
    </div>
  );
};

export default TotalAmount;
