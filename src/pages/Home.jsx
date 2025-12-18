import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Partners from "../components/Partners/Partners";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";

import headphone from "../assets/hero/headphone.png";
import smartwatch2 from "../assets/category/smartwatch2-removebg-preview.png";

const bannerPrimary = {
  discount: "30% OFF",
  title: "Pro Gaming Gear",
  date: "Limited Time",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Neon Nights Sale",
  title4: "Upgrade your setup with RGB-ready audio and pro-grade sound.",
  bgColor: "#7c3aed",
};

const bannerSecondary = {
  discount: "20% OFF",
  title: "Creator Hours",
  date: "Weekends Only",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Stream Ready",
  title4: "Track your sessions, alerts, and achievements in style.",
  bgColor: "#22c55e",
};

const Home = ({ handleOrderPopup, onAddToCart }) => {
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={bannerPrimary} />
      <Products onAddToCart={onAddToCart} />
      <Banner data={bannerSecondary} />
      <Blogs />
      <Partners />
    </>
  );
};

export default Home;


