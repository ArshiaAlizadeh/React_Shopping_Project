import React, { createContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = async () => {
    setLoading(true);
    await signOut(auth);
    setUser(null);
    setLoading(false);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, loading, setLoading, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
