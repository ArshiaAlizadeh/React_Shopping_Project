import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// styles
import styles from "./Product.module.css";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTrash,
  faPlus,
  faMinus,
  faHeart as fillFaHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as borderFaHeart } from "@fortawesome/free-regular-svg-icons";

// context
import { CartContext } from "../../contexts/CartContextProvider";

// functions
import { isInCart, productNumber } from "../../helper/functions";

const Product = ({ product }) => {
  const { state, dispatch } = useContext(CartContext);

  const computeInitialColor = () => {
    const initialColor = !!state.selectedProducts.find(
      (p) => p.id === product.id
    )
      ? state.selectedProducts.find((p) => p.id === product.id).color
      : product.color[0].name;
    return initialColor;
  };

  const [color, setColor] = useState(computeInitialColor());
  const [focusedHeartIcon, setFocusedHeartIcon] = useState(false);
  const [length] = useState(state.selectedProducts.length);
  const prevLengthRef = useRef();

  useEffect(() => {
    prevLengthRef.current = length;
  }, [length]);

  const prevLength = prevLengthRef.current;

  useEffect(() => {
    if (prevLength === length) {
      setColor(computeInitialColor());
    }
  }, [length, prevLength]);

  const changeHandler = (event) => {
    setColor(event.target.value);
  };

  return (
    <div key={product.id} className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={product.image[color]}
          alt={product.name}
          className={styles.image}
        />
      </div>
      <div className={styles.titlePriceContainer}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.price}>{product.price}$</div>
      </div>
      <div className={styles.colorName}>Color : {color}</div>
      <div className={styles.radioContainer}>
        {product.color.map((colorMap, i) => (
          <div key={colorMap.name} onChange={changeHandler}>
            <input
              type="radio"
              name={product.id}
              value={colorMap.name}
              defaultChecked={i === 0 ? true : false}
              style={{ backgroundColor: colorMap.hexCode }}
              className={
                color === colorMap.name ? styles.radioSelected : undefined
              }
            ></input>
          </div>
        ))}
      </div>
      <div className={styles.iconButtonsContainer}>
        <FontAwesomeIcon
          icon={focusedHeartIcon ? fillFaHeart : borderFaHeart}
          onClick={() =>
            setFocusedHeartIcon((prevFocusedHeartIcon) => !prevFocusedHeartIcon)
          }
          className={styles.iconHeart}
        />
        <Link to="/main/cart" className={styles.cartIconContainer}>
          <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon} />
          <span className={styles.span}>
            {state.selectedProducts
              .filter((item) => item.id === product.id)
              .reduce((total, i) => total + i.number, 0)}
          </span>
        </Link>

        <div className={styles.buttonsContainer}>
          {productNumber(state, product.id, color) > 1 ? (
            <div
              className={styles.minusBtn}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: product, color: color })
              }
            >
              <FontAwesomeIcon icon={faMinus} />
            </div>
          ) : undefined}
          {productNumber(state, product.id, color) === 1 ? (
            <div
              className={styles.trashBtn}
              onClick={() =>
                dispatch({
                  type: "REMOVE_PRODUCT",
                  payload: product,
                  color: color,
                })
              }
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          ) : undefined}
          {productNumber(state, product.id, color) > 0 ? (
            <span className={styles.productNumber}>
              {productNumber(state, product.id, color)}
            </span>
          ) : undefined}
          {isInCart(state, product.id, color) ? (
            <div
              className={styles.plusBtn}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: product, color: color })
              }
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
          ) : (
            <div
              className={styles.addToCardBtn}
              onClick={() =>
                dispatch({
                  type: "ADD_PRODUCT",
                  payload: product,
                  color: color,
                })
              }
            >
              <div className={styles.addToCardBtnWrapper}>
                <div className={styles.addToCardBtnText}>Add To Cart</div>
                <span className={styles.addToCardBtnIcon}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
