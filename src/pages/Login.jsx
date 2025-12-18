import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const from = location.state?.from || "/account";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email is required.");
      return;
    }
    login({ email, password });
    navigate(from, { replace: true });
  };

  return (
    <div className="container py-16 flex justify-center">
      <div className="w-full max-w-md bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 text-left">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
          Sign in
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          Access your profile, saved addresses, and order history. No password
          rules here — this is a frontend-only demo.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full mt-2 px-5 py-2.5 rounded-full bg-fuchsia-500 text-white text-sm font-semibold hover:bg-fuchsia-600 transition-colors"
          >
            Continue
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-400">
          New to Eshop?{" "}
          <Link
            to="/signup"
            className="text-fuchsia-400 hover:text-fuchsia-300 font-medium"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


