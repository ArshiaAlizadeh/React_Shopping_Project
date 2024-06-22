import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// context
import ProductsContextProvider from "./contexts/ProductsContextProvider";

// components
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Main from "./components/Main";

const App = () => {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/" element={<Navigate to="/main" replace />} />
      </Routes>
    </ProductsContextProvider>
  );
};

export default App;
