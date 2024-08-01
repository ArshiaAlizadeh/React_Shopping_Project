const isInCart = (state, id, color) => {
  const result = !!state.selectedProducts.find(
    (product) => product.id === id && product.color === color
  );
  return result;
};

const productNumber = (state, id, color) => {
  const index = state.selectedProducts.findIndex(
    (product) => product.id === id && product.color === color
  );
  if (index === -1) {
    return false;
  } else {
    return state.selectedProducts[index].number;
  }
};

export { isInCart, productNumber };
