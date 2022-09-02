//import axios from "axios";
import React from "react";
//import { useState } from "react";

export default function Product(props) {
  //characters.map((char) => console.log(char));

  const { product, onAdd } = props;

  return (
    <div>
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
