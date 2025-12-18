import React from "react";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default AppProviders;


