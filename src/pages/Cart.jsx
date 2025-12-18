import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const formatAED = (value) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);

const Cart = () => {
  const navigate = useNavigate();
  const { items, removeItem, clearCart, updateQuantity, subtotal } = useCart();

  const hasItems = items && items.length > 0;
  const deliveryFee = hasItems ? 20 : 0;
  const vat = hasItems ? subtotal * 0.05 : 0;
  const total = subtotal + deliveryFee + vat;

  return (
    <div className="container py-16 min-h-[60vh] text-left">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
        Your Cart
      </h1>
      {!hasItems && (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-700/70 bg-gray-900/40 px-6 py-16 gap-4">
          <p className="text-gray-400 text-sm">
            Your cart is empty. Start exploring the shop to add some gear.
          </p>
          <button
            className="mt-2 px-5 py-2.5 rounded-full bg-fuchsia-500 text-white text-sm font-semibold hover:bg-fuchsia-600 transition-colors"
            onClick={() => navigate("/shop")}
          >
            Browse products
          </button>
        </div>
      )}
      {hasItems && (
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr),minmax(0,1fr)] mt-8">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-3 items-center"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-fuchsia-400">
                    {item.category}
                  </p>
                  <h2 className="text-sm font-semibold text-white">
                    {item.title}
                  </h2>
                  {item.variant && (
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.variant}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-slate-400">Qty</span>
                    <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 overflow-hidden">
                      <button
                        type="button"
                        className="px-2 text-xs text-slate-300 hover:text-white"
                        onClick={() =>
                          updateQuantity(item.key, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs text-slate-100">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="px-2 text-xs text-slate-300 hover:text-white"
                        onClick={() =>
                          updateQuantity(item.key, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-fuchsia-300">
                    {formatAED(item.priceAED * item.quantity)}
                  </p>
                  <button
                    className="mt-1 text-[11px] text-slate-400 hover:text-red-400"
                    onClick={() => removeItem(item.key)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <aside className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 h-fit space-y-4">
            <h2 className="text-lg font-semibold text-white">Order summary</h2>
            <div className="flex justify-between text-sm text-slate-300">
              <span>Subtotal</span>
              <span>{formatAED(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-300">
              <span>VAT (5%)</span>
              <span>{formatAED(vat)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-300">
              <span>Delivery</span>
              <span>{deliveryFee ? formatAED(deliveryFee) : "Free"}</span>
            </div>
            <div className="border-t border-slate-800 pt-3 flex justify-between font-semibold text-white">
              <span>Total</span>
              <span>{formatAED(total)}</span>
            </div>
            <button
              className="w-full mt-3 bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
              onClick={() => navigate("/checkout")}
            >
              Proceed to checkout
            </button>
            <button
              className="w-full mt-2 border border-slate-700 text-slate-200 text-sm font-medium py-2.5 rounded-full hover:border-red-400 hover:text-red-300 transition-colors"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;


