import React, { createContext, useReducer } from "react";

const initialState = {
  selectedProducts: [],
  productsNumber: 0,
  totalPrice: 0,
  checkout: false,
};

const sumProducts = (products) => {
  const productsNumber = products.reduce(
    (total, product) => total + product.number,
    0
  );
  const totalPrice = products
    .reduce((total, product) => total + product.price * product.number, 0)
    .toFixed(2);
  return { productsNumber, totalPrice };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (
        !state.selectedProducts.find(
          (product) =>
            product.id === action.payload.id && product.color === action.color
        )
      ) {
        state.selectedProducts.push({
          ...action.payload,
          image: action.payload.image[action.color],
          color: action.color,
          number: 1,
        });
      }
      return {
        ...state,
        selectedProducts: [...state.selectedProducts],
        ...sumProducts(state.selectedProducts),
        checkout: false,
      };
    case "REMOVE_PRODUCT":
      const newSelectedProducts = state.selectedProducts.filter(
        (product) =>
          !(product.id === action.payload.id && product.color === action.color)
      );
      return {
        ...state,
        selectedProducts: [...newSelectedProducts],
        ...sumProducts(newSelectedProducts),
      };
    case "INCREASE":
      const indexI = state.selectedProducts.findIndex(
        (product) =>
          product.id === action.payload.id && product.color === action.color
      );
      state.selectedProducts[indexI].number++;
      return {
        ...state,
        ...sumProducts(state.selectedProducts),
      };
    case "DECREASE":
      const indexD = state.selectedProducts.findIndex(
        (product) =>
          product.id === action.payload.id && product.color === action.color
      );
      state.selectedProducts[indexD].number--;
      return {
        ...state,
        ...sumProducts(state.selectedProducts),
      };
    case "CHECKOUT":
      return {
        selectedProducts: [],
        productsNumber: 0,
        totalPrice: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedProducts: [],
        productsNumber: 0,
        totalPrice: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
