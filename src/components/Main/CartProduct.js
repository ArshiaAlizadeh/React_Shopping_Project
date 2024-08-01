import React, { useContext } from "react";

// styles
import styles from "./CartProduct.module.css";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// context
import { CartContext } from "../../contexts/CartContextProvider";

// functions
import { productNumber } from "../../helper/functions";

const CartProduct = ({ product }) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.colorName}>Color : {product.color}</div>
        <div className={styles.price}>{product.price}$</div>
      </div>
      <div className={styles.numberContainer}>
        <div className={styles.number}>{product.number}</div>
      </div>
      <div className={styles.buttonsContainer}>
        {productNumber(state, product.id, product.color) > 1 ? (
          <div
            className={styles.minusBtn}
            onClick={() =>
              dispatch({
                type: "DECREASE",
                payload: product,
                color: product.color,
              })
            }
          >
            <FontAwesomeIcon icon={faMinus} />
          </div>
        ) : undefined}
        {productNumber(state, product.id, product.color) === 1 ? (
          <div
            className={styles.trashBtn}
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                payload: product,
                color: product.color,
              })
            }
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        ) : undefined}
        <div
          className={styles.plusBtn}
          onClick={() =>
            dispatch({
              type: "INCREASE",
              payload: product,
              color: product.color,
            })
          }
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
