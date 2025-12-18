import React from "react";
import Heading from "../components/Shared/Heading";
import Products from "../components/Products/Products";

const Shop = ({ onAddToCart }) => {
  return (
    <div className="container py-10">
      <Heading
        title="Shop All Tech"
        subtitle="Browse our curated collection of headphones, wearables, and gaming gear."
      />
      <Products onAddToCart={onAddToCart} showHeader={false} />
    </div>
  );
};

export default Shop;


