import React from "react";
import { Link } from "react-router-dom";
import Currency from "react-currency-formatter";

const Portfolio = ({ portfolio }) => {
  console.log("portfo", portfolio);
  let newp = [];
  if (portfolio.length) {
    portfolio.map(val => {
      newp.push({ ...val });
    });
  }
  return (
    <div>
      <h2>Your Portfolio</h2>
      <table className="table table-borderd">
        <thead>
          <tr>
            <th>Coin Logo</th>
            <th>Coin Name</th>
            <th>Price</th>
            <th>Coin Price</th>
          </tr>
        </thead>
        <tbody>
          {newp.length != 0 ? (
            newp.map((val, index) => {
              return (
                <tr key={index}>
                  <td className="thumb">
                    <img src={val.coin.clogo} alt={val.coin.label} />
                  </td>
                  <td>
                    <Link
                      onClick={event =>
                        !val.coin.sym ? event.preventDefault() : null
                      }
                      to={`/detail?coin=${val.coin.sym}`}
                      target="_blank"
                    >
                      {val.coin.label}
                    </Link>
                  </td>
                  <td>{val.amount}</td>
                  <td>
                    <Currency quantity={parseInt(val.cprice)} currency="USD" />
                  </td>
                </tr>
              );
            })
          ) : (
            <br />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
