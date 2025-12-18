import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import { useProducts } from "../../context/ProductContext";
import { CATEGORY_LABELS } from "../../data/products";

const Products = ({ onAddToCart, showHeader = true }) => {
  const {
    filteredProducts,
    status,
    error,
    viewMode,
    setViewMode,
    categories,
    category,
    setCategory,
  } = useProducts();

  const isLoading = status === "loading";

  return (
    <div>
      <div className="container">
        {showHeader && (
          <Heading title="Our Products" subtitle={"Explore Our Products"} />
        )}

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 mb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isAll = cat === "all";
              const label = isAll
                ? "All categories"
                : CATEGORY_LABELS[cat] || cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    cat === category
                      ? "bg-fuchsia-500 text-white border-fuchsia-400"
                      : "bg-slate-900/60 text-slate-300 border-slate-700 hover:border-fuchsia-400/70 hover:text-fuchsia-200"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-slate-400 uppercase tracking-[0.2em]">
              View
            </span>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                viewMode === "grid"
                  ? "bg-slate-100 text-slate-900 border-slate-100"
                  : "bg-slate-900/60 text-slate-300 border-slate-700 hover:border-fuchsia-400/70"
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                viewMode === "list"
                  ? "bg-slate-100 text-slate-900 border-slate-100"
                  : "bg-slate-900/60 text-slate-300 border-slate-700 hover:border-fuchsia-400/70"
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Error state */}
        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {error}
          </div>
        )}

        {/* Loading skeletons */}
        {isLoading ? (
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
              {["1", "2", "3", "4", "5", "6", "7", "8"].map((id) => (
                <div
                  key={id}
                  className="w-full max-w-xs rounded-2xl border border-slate-800 bg-slate-900/60 p-4 animate-pulse"
                >
                  <div className="h-40 w-full rounded-xl bg-slate-800 mb-4" />
                  <div className="h-3 w-24 rounded-full bg-slate-800 mb-2" />
                  <div className="h-4 w-32 rounded-full bg-slate-700 mb-2" />
                  <div className="h-3 w-full rounded-full bg-slate-800 mb-2" />
                  <div className="h-3 w-1/2 rounded-full bg-slate-800" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <ProductCard
            data={filteredProducts}
            onAddToCart={onAddToCart}
            viewMode={viewMode}
          />
        )}

        {/* Empty state */}
        {!isLoading && !error && filteredProducts.length === 0 && (
          <div className="mt-10 flex items-center justify-center rounded-2xl border border-dashed border-slate-700/70 bg-slate-900/40 px-6 py-14">
            <p className="text-gray-400 text-sm">
              No products match your filters yet. Try adjusting the category or
              search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
