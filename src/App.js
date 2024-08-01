import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// contexts
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

// components
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Main from "./components/Main";

const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/" element={<Navigate to="/main" replace />} />
        </Routes>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
