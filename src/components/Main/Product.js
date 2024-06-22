import React, { useState } from "react";

const Product = ({ product }) => {
  const [color, setColor] = useState(product.color[0].name);

  const changeHandler = (event) => {
    setColor(event.target.value);
  };

  return (
    <div
      key={product.id}
      style={{
        width: "250px",
        height: "350px",
        marginLeft: "100px",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      }}
    >
      <div style={{ backgroundColor: "white", padding: "20px 0" }}>
        <img
          src={product.image[color]}
          alt={product.name}
          style={{
            aspectRatio: "1",
            objectFit: "contain",
            width: "150px",
            display: "block",
            margin: "auto",
          }}
        />
      </div>
      <h4>name: {product.title}</h4>
      <p>price: {product.price}$</p>
      {product.color.map((color, i) => (
        <div key={color.name} onChange={changeHandler}>
          <span style={{ color: color.hexCode }}>{color.name}:</span>
          <input
            type="radio"
            name={product.id}
            value={color.name}
            defaultChecked={i === 0 ? true : false}
          ></input>
        </div>
      ))}
    </div>
  );
};

export default Product;
