import React from "react";
import "../../src/styles/cards.css";

const Cards = ({ item }) => {
  const { name, cost, image } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <img src={image} alt="image" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{cost}</p>
        <button>Add Item</button>
      </div>
    </div>
  );
};
export default Cards;
