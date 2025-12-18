import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setError("All fields are required.");
      return;
    }
    signup(form);
    navigate("/account", { replace: true });
  };

  return (
    <div className="container py-16 flex justify-center">
      <div className="w-full max-w-md bg-slate-900/70 border border-slate-800 rounded-2xl p-6 md:p-8 text-left">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
          Create account
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          Save your details and keep your orders, addresses, and preferences in
          one place. This is a demo-only experience with client-side storage.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Full name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            />
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
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full mt-2 px-5 py-2.5 rounded-full bg-fuchsia-500 text-white text-sm font-semibold hover:bg-fuchsia-600 transition-colors"
          >
            Create account
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-fuchsia-400 hover:text-fuchsia-300 font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;


