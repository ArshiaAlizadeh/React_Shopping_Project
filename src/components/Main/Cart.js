import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./Cart.module.css";

// context
import { CartContext } from "../../contexts/CartContextProvider";

// components
import CartProduct from "./CartProduct";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.cartProductsContainer}>
          {state.selectedProducts.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>
        {state.productsNumber > 0 ? (
          <div className={styles.checkoutContainer}>
            <div className={styles.totalProducts}>
              Total Products <span className={styles.colonSign}>:</span>{" "}
              {state.productsNumber}
            </div>
            <div className={styles.totalPayments}>
              Total Payments <span className={styles.colonSign}>:</span>{" "}
              {state.totalPrice} <span className={styles.dolorSign}>$</span>
            </div>
            <div className={styles.clearCheckoutContainer}>
              <span
                className={styles.clear}
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                Clear
              </span>
              <div
                className={styles.checkout}
                onClick={() => dispatch({ type: "CHECKOUT" })}
              >
                Checkout
              </div>
            </div>
          </div>
        ) : undefined}
      </div>
      {state.productsNumber === 0 && state.checkout === false ? (
        <div className={styles.messageContainer}>
          <p className={styles.message}>Your Cart is Empty!</p>
          <Link to="products" className={styles.link}>
            Back to Shop
          </Link>
        </div>
      ) : undefined}
      {state.checkout ? (
        <div className={styles.messageContainer}>
          <p className={styles.message}>Checked Out Successfully 😍</p>
          <Link to="products" className={styles.link}>
            Buy More
          </Link>
        </div>
      ) : undefined}
    </div>
  );
};

export default Cart;
