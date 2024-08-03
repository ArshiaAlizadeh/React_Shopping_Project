import React, { useContext } from "react";

// styles
import styles from "./Products.module.css";

// context
import { ProductsContext } from "../../contexts/ProductsContextProvider";

// components
import Product from "./Product";

const Products = ({ category }) => {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      <div className={styles.productsContainer}>
        {category === "all"
          ? products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : products
              .filter((item) => item.category === category)
              .map((product) => <Product key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Products;
