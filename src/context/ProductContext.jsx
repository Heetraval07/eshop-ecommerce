import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  products as baseProducts,
  CATEGORY_KEYS,
} from "../data/products";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid | list
  const [category, setCategory] = useState("all");

  useEffect(() => {
    // Simulate async load for skeletons and error handling
    setStatus("loading");
    const timer = setTimeout(() => {
      try {
        setProducts(baseProducts);
        setStatus("success");
      } catch (err) {
        console.error(err);
        setError("Failed to load products. Please try again.");
        setStatus("error");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    // Use normalized category keys to guarantee stable, data‑driven tabs
    return ["all", ...CATEGORY_KEYS];
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }
    if (search.trim()) {
      const term = search.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.name?.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.categoryLabel?.toLowerCase().includes(term) ||
          p.shortDescription?.toLowerCase().includes(term) ||
          p.description?.toLowerCase().includes(term)
      );
    }
    return result;
  }, [products, category, search]);

  const value = {
    products,
    status,
    error,
    categories,
    filteredProducts,
    search,
    setSearch,
    viewMode,
    setViewMode,
    category,
    setCategory,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  const ctx = useContext(ProductContext);
  if (!ctx) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return ctx;
};


