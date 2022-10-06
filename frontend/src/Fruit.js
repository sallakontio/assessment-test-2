import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import config from "./config.json";
import { calculateAvg, calculateTotal } from './shoppingCartUtils';

function getFruitEmoji(name) {
  return {
    banana: "🍌",
    orange: "🍊",
    apple: "🍎",
    lemon: "🍋",
    pineapple: "🍍",
    mango: "🥭",
    kiwi: "🥝",
    watermelon: "🍉",
    melon: "🍈",
  }[name.toLowerCase()];
}

export function Fruit() {
  const [fruits, setFruits] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const fetchData = () => {
    fetch(`${config.API_URL}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFruits(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Fruit</h1>

      <SearchBar onSubmit={onSubmit} />

      <details>
        <summary className="contrast" role="button">
          Shopping cart ({shoppingCart.length}) - {calculateTotal(shoppingCart)}€
        </summary>
        <div>
          <table>
            <tbody>
              {shoppingCart.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.price}€</td>
                  </tr>
                );
              })}
              <tr>
                <td><b>Average</b></td>
                <td><b>{calculateAvg(shoppingCart)}€</b></td>
              </tr>
              <tr>
                <td><b>Total</b></td>
                <td><b>{calculateTotal(shoppingCart)}€</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>

      {fruits.map((fruit) => {
        return (
          <article key={fruit.name}>
            <header>
              <b>{fruit.name}</b>
            </header>

            <div className="grid">
              <div>
                <h1>{getFruitEmoji(fruit.name)}</h1>
              </div>
              <div>
                <h2>{fruit.price}€</h2>
              </div>
            </div>

            <footer className="align-right">
              <button
                role="button"
                onClick={() => {
                  addToCart(fruit);
                }}
                className="outline"
              >
                Add to cart
              </button>
            </footer>
          </article>
        );
      })}
    </>
  );
}
