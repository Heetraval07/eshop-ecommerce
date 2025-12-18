import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const formatAED = (value) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);

const Account = () => {
  const { user, orders, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="container py-16 text-left">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            My account
          </h1>
          {!user && (
            <p className="text-sm text-slate-400 mb-6 max-w-xl">
              You&apos;re browsing as a guest. Sign in or create an account to
              sync your details and keep your orders accessible across devices.
            </p>
          )}
          {user && (
            <p className="text-sm text-slate-400 mb-6">
              Signed in as{" "}
              <span className="font-medium text-slate-100">
                {user.name || user.email}
              </span>
              .
            </p>
          )}

          <div className="space-y-4">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
              <h2 className="text-sm font-semibold text-slate-200 mb-3">
                Profile
              </h2>
              {user ? (
                <>
                  <p className="text-sm text-slate-100">{user.name}</p>
                  <p className="text-sm text-slate-300 mb-4">{user.email}</p>
                  <button
                    className="px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-slate-300">
                    Create a free account in seconds. We only store your data in
                    this browser for demo purposes.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link
                      to="/login"
                      className="px-4 py-2 rounded-full bg-fuchsia-500 text-xs font-semibold text-white hover:bg-fuchsia-600 transition-colors"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/signup"
                      className="px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <aside className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 h-fit">
          <h2 className="text-sm font-semibold text-slate-200 mb-3">
            Order history
          </h2>
          {orders.length === 0 ? (
            <p className="text-sm text-slate-400">
              You don&apos;t have any orders yet. Once you check out, your
              recent orders will appear here.
            </p>
          ) : (
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1 custom-scroll">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border border-slate-800 rounded-xl p-3 bg-slate-950/60"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[11px] font-mono text-slate-400">
                      #{order.id}
                    </span>
                    <span className="text-xs text-slate-400">
                      {new Date(order.createdAt).toLocaleString("en-AE", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200">
                    {order.items.length} item
                    {order.items.length > 1 ? "s" : ""} •{" "}
                    <span className="font-semibold text-fuchsia-300">
                      {formatAED(order.total)}
                    </span>
                  </p>
                  <button
                    className="mt-2 text-[11px] text-fuchsia-400 hover:text-fuchsia-300 font-medium"
                    onClick={() =>
                      navigate(`/order-confirmation/${order.id}`, {
                        state: { order },
                      })
                    }
                  >
                    View details
                  </button>
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Account;


