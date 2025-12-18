import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const formatAED = (value) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  emirate: "",
};

const emirates = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
];

const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const { user, recordOrder } = useAuth();

  const [form, setForm] = useState(() => ({
    ...initialForm,
    fullName: user?.name || "",
    email: user?.email || "",
  }));
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const hasItems = items && items.length > 0;
  const deliveryFee = hasItems ? 20 : 0;
  const vat = hasItems ? subtotal * 0.05 : 0;
  const total = subtotal + deliveryFee + vat;

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) next.phone = "Phone is required.";
    if (!form.addressLine1.trim())
      next.addressLine1 = "Primary address is required.";
    if (!form.city.trim()) next.city = "City is required.";
    if (!form.emirate.trim()) next.emirate = "Emirate is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hasItems) return;
    if (!validate()) return;

    setSubmitting(true);

    const orderId = Date.now().toString();
    const order = {
      id: orderId,
      createdAt: new Date().toISOString(),
      items,
      subtotal,
      vat,
      deliveryFee,
      total,
      customer: {
        ...form,
        userEmail: user?.email || form.email,
      },
    };

    recordOrder(order);
    clearCart();

    setTimeout(() => {
      navigate(`/order-confirmation/${orderId}`, { state: { order } });
    }, 300);
  };

  if (!hasItems) {
    return (
      <div className="container py-16 text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Checkout
        </h1>
        <p className="text-gray-400 text-sm">
          Your cart is empty. Add items to your cart before checking out.
        </p>
        <button
          className="mt-4 px-5 py-2.5 rounded-full bg-fuchsia-500 text-white text-sm font-semibold hover:bg-fuchsia-600 transition-colors"
          onClick={() => navigate("/shop")}
        >
          Browse products
        </button>
      </div>
    );
  }

  return (
    <div className="container py-16 grid gap-10 lg:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)] items-start">
      <div className="text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Checkout
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          You can check out as a guest or while signed in. We ship across the
          UAE.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Full name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
              />
              {errors.fullName && (
                <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
              />
              {errors.phone && (
                <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
              />
              {errors.city && (
                <p className="text-xs text-red-400 mt-1">{errors.city}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Address line 1
            </label>
            <input
              type="text"
              name="addressLine1"
              value={form.addressLine1}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            />
            {errors.addressLine1 && (
              <p className="text-xs text-red-400 mt-1">
                {errors.addressLine1}
              </p>
            )}
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Address line 2 (optional)
            </label>
            <input
              type="text"
              name="addressLine2"
              value={form.addressLine2}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Emirate
              </label>
              <select
                name="emirate"
                value={form.emirate}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
              >
                <option value="">Select emirate</option>
                {emirates.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              {errors.emirate && (
                <p className="text-xs text-red-400 mt-1">{errors.emirate}</p>
              )}
            </div>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 rounded-full bg-fuchsia-500 text-white text-sm font-semibold hover:bg-fuchsia-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Placing order..." : "Place order"}
            </button>
          </div>
        </form>
      </div>

      <aside className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 h-fit space-y-4 text-left">
        <h2 className="text-lg font-semibold text-white">Order summary</h2>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-1 custom-scroll">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex justify-between items-start text-sm text-slate-200"
            >
              <div className="mr-2">
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-slate-400">
                  Qty {item.quantity}
                  {item.variant ? ` • ${item.variant}` : ""}
                </p>
              </div>
              <p className="text-sm font-semibold text-fuchsia-300">
                {formatAED(item.priceAED * item.quantity)}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-slate-300 pt-2">
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
        {!user && (
          <p className="text-xs text-slate-400 pt-2">
            You are checking out as a guest. Create an account next time to keep
            all your orders in one place.
          </p>
        )}
      </aside>
    </div>
  );
};

export default Checkout;


