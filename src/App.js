import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// context
import ProductsContextProvider from "./contexts/ProductsContextProvider";

// components
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </ProductsContextProvider>
  );
};

export default App;
