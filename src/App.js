import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import SignUp from "./components/SignUp";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/signup" replace />} />
      </Routes>
    </>
  );
};

export default App;
