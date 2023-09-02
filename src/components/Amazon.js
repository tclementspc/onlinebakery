import React from "react";
import { ROLLS } from "../app/shared/ROLLS";
import Cards from "./Cards";
import "../../src/styles/amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {ROLLS.map((item) => {
        <Cards item={item} key={item.id} handleClick={handleClick} />;
      })}
    </section>
  );
};
export default Amazon;
