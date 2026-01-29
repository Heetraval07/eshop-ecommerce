import React from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { useCart } from "./context/CartContext";
import RequireAuth from "./components/Auth/RequireAuth";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const { addItem } = useCart();

  const handleOrderPopup = () => {
    setOrderPopup((prev) => !prev);
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    addItem(product);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-slate-950 text-white duration-200 flex flex-col overflow-x-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <main className="flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleOrderPopup={handleOrderPopup}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/shop"
            element={<Shop onAddToCart={handleAddToCart} />}
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/order-confirmation/:id"
            element={<OrderConfirmation />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <RequireAuth>
                <Account />
              </RequireAuth>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
};

export default App;
