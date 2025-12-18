import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "eshop_auth_v1";

const loadAuth = () => {
  if (typeof window === "undefined") return { user: null, orders: [] };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { user: null, orders: [] };
  } catch {
    return { user: null, orders: [] };
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => loadAuth().user);
  const [orders, setOrders] = useState(() => loadAuth().orders || []);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ user, orders })
      );
    } catch {
      // ignore
    }
  }, [user, orders]);

  const signup = ({ name, email, password }) => {
    // Simple frontend-only auth; in real app this would be an API call.
    setUser({ name, email });
  };

  const login = ({ email }) => {
    // Demo-only: treat any email as valid and restore a minimal user.
    setUser((prev) => prev || { name: email.split("@")[0], email });
  };

  const logout = () => {
    setUser(null);
  };

  const recordOrder = (order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const value = {
    user,
    orders,
    signup,
    login,
    logout,
    recordOrder,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
};


