import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";
import Button from "../components/Shared/Button";
import { useCart } from "../context/CartContext";

const formatAED = (value) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = getProductById(id);

  const [activeImage, setActiveImage] = React.useState(
    product?.images?.[0] || product?.img
  );
  const [selectedColor, setSelectedColor] = React.useState(
    product?.colors?.[0] || null
  );
  const [selectedSize, setSelectedSize] = React.useState(
    product?.sizes?.[0] || null
  );

  if (!product) {
    return (
      <div className="container py-16 text-left">
        <p className="text-gray-400">Product not found.</p>
        <button
          className="mt-4 text-fuchsia-400 hover:text-fuchsia-300 text-sm font-medium"
          onClick={() => navigate("/shop")}
        >
          Back to shop
        </button>
      </div>
    );
  }

  const isOutOfStock = product.stock !== undefined && product.stock <= 0;
  const hasDiscount =
    product.originalPriceAED && product.originalPriceAED > product.priceAED;

  const variantLabel = [selectedColor, selectedSize]
    .filter(Boolean)
    .join(" / ");

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addItem(product, { variant: variantLabel || undefined });
  };

  return (
    <div className="container py-16 grid gap-10 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-start">
      {/* Image gallery with zoom */}
      <div className="space-y-4">
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black shadow-2xl shadow-black/60 group">
          <img
            src={activeImage}
            alt={product.title}
            className="w-full h-full max-h-[480px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-3 right-3 text-[11px] bg-black/60 text-slate-100 px-2 py-1 rounded-full border border-white/10">
            Hover to zoom
          </span>
        </div>
        {product.images && product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((img) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`h-16 w-16 rounded-xl border overflow-hidden ${
                  activeImage === img
                    ? "border-fuchsia-500 ring-2 ring-fuchsia-500/40"
                    : "border-slate-700 hover:border-fuchsia-400/70"
                }`}
              >
                <img
                  src={img}
                  alt="Product thumbnail"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product details */}
      <div className="text-left space-y-5">
        <p className="text-[11px] uppercase tracking-[0.3em] text-fuchsia-400">
          {product.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {product.title}
        </h1>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {product.shortDescription}
        </p>

        <div className="flex items-center gap-3 pt-2">
          <span className="text-2xl font-bold text-fuchsia-300">
            {formatAED(product.priceAED)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-slate-400 line-through">
              {formatAED(product.originalPriceAED)}
            </span>
          )}
          {product.badge && (
            <span className="text-[11px] uppercase tracking-[0.2em] bg-fuchsia-500/10 text-fuchsia-300 px-3 py-1 rounded-full border border-fuchsia-500/40">
              {product.badge}
            </span>
          )}
        </div>

        {/* Stock status */}
        <p className="text-sm">
          {isOutOfStock ? (
            <span className="text-red-400 font-medium">Out of stock</span>
          ) : product.stock < 5 ? (
            <span className="text-amber-400 font-medium">
              Low stock — only {product.stock} left
            </span>
          ) : (
            <span className="text-emerald-400 font-medium">
              In stock — ready to ship
            </span>
          )}
        </p>

        {/* Variants */}
        {(product.colors?.length || product.sizes?.length) && (
          <div className="space-y-3 pt-2">
            {product.colors?.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-300 mb-1">
                  Color
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        selectedColor === color
                          ? "bg-fuchsia-500 text-white border-fuchsia-500"
                          : "bg-slate-900/60 text-slate-200 border-slate-700 hover:border-fuchsia-400/70"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {product.sizes?.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-300 mb-1">
                  Size / Capacity
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                        selectedSize === size
                          ? "bg-slate-100 text-slate-900 border-slate-100"
                          : "bg-slate-900/60 text-slate-200 border-slate-700 hover:border-fuchsia-400/70"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="pt-4 flex flex-wrap gap-3 items-center">
          <Button
            text={isOutOfStock ? "Out of stock" : "Add to cart"}
            bgColor={isOutOfStock ? "bg-slate-600" : "bg-fuchsia-500"}
            textColor="text-white"
            handler={handleAddToCart}
            disabled={isOutOfStock}
          />
          <button
            className="px-5 py-2.5 rounded-full border border-slate-700 text-sm font-medium text-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            onClick={() => navigate("/shop")}
          >
            Continue shopping
          </button>
        </div>

        {/* Long description */}
        {product.longDescription && (
          <div className="pt-4 border-t border-slate-800 mt-4">
            <h2 className="text-sm font-semibold text-slate-200 mb-2">
              Product details
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              {product.longDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;


