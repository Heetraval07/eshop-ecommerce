import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const formatAED = (value) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);

const OrderConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { orders } = useAuth();

  const order =
    location.state?.order || orders.find((o) => String(o.id) === String(id));

  if (!order) {
    return (
      <div className="container py-16 text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          Order not found
        </h1>
        <p className="text-gray-400 text-sm">
          We couldn't locate this order. It may have expired or been cleared.
        </p>
        <button
          className="mt-4 px-5 py-2.5 rounded-full bg-fuchsia-500 text-white text-sm font-semibold hover:bg-fuchsia-600 transition-colors"
          onClick={() => navigate("/shop")}
        >
          Back to shop
        </button>
      </div>
    );
  }

  return (
    <div className="container py-16 text-left">
      <div className="max-w-2xl mx-auto bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
          Thank you for your order
        </h1>
        <p className="text-sm text-slate-300 mb-4">
          Your order has been received and is now being processed. A
          confirmation email will be sent to{" "}
          <span className="font-medium text-white">
            {order.customer?.email}
          </span>
          .
        </p>
        <p className="text-xs text-slate-400 mb-6">
          Order ID:{" "}
          <span className="font-mono text-slate-200">{order.id}</span>
        </p>

        <div className="border border-slate-800 rounded-2xl p-4 mb-4 bg-slate-950/60">
          <h2 className="text-sm font-semibold text-slate-200 mb-3">
            Order summary
          </h2>
          <div className="space-y-2 max-h-40 overflow-y-auto pr-1 custom-scroll">
            {order.items.map((item) => (
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
          <div className="mt-3 space-y-1 text-sm text-slate-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatAED(order.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT (5%)</span>
              <span>{formatAED(order.vat)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>
                {order.deliveryFee ? formatAED(order.deliveryFee) : "Free"}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-white pt-2 border-t border-slate-800 mt-1">
              <span>Total</span>
              <span>{formatAED(order.total)}</span>
            </div>
          </div>
        </div>

        <div className="border border-slate-800 rounded-2xl p-4 mb-6 bg-slate-950/60">
          <h2 className="text-sm font-semibold text-slate-200 mb-2">
            Shipping to
          </h2>
          <p className="text-sm text-slate-200">
            {order.customer?.fullName}
          </p>
          <p className="text-sm text-slate-300">
            {order.customer?.addressLine1}
          </p>
          {order.customer?.addressLine2 && (
            <p className="text-sm text-slate-300">
              {order.customer.addressLine2}
            </p>
          )}
          <p className="text-sm text-slate-300">
            {order.customer?.city}, {order.customer?.emirate}, UAE
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            className="px-5 py-2.5 rounded-full bg-fuchsia-500 text-white text-sm font-semibold hover:bg-fuchsia-600 transition-colors"
            onClick={() => navigate("/shop")}
          >
            Continue shopping
          </button>
          <button
            className="px-5 py-2.5 rounded-full border border-slate-700 text-sm font-medium text-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            onClick={() => navigate("/account")}
          >
            View order history
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;


