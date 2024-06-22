import React, { useContext } from "react";

// context
import { ProductsContext } from "../../contexts/ProductsContextProvider";

// components
import Product from "./Product";

const Products = () => {
  const products = useContext(ProductsContext);
  return (
    <div style={{ paddingTop: "10vh" }}>
      <h1>Products Page</h1>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
