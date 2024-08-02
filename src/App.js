import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// contexts
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import UserContextProvider from "./contexts/UserContextProvider";

// components
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Main from "./components/Main";

const App = () => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <UserContextProvider>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main/*" element={<Main />} />
            <Route path="/" element={<Navigate to="/main" replace />} />
          </Routes>
        </UserContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  );
};

export default App;
