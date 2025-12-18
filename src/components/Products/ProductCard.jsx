import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Shared/Button";

const formatAED = (value) =>
  new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
  }).format(value);

const ProductCard = ({ data, onAddToCart, viewMode = "grid" }) => {
  const navigate = useNavigate();

  if (!data || data.length === 0) {
    return null;
  }

  const isGrid = viewMode === "grid";

  return (
    <div className="mb-10">
      <div
        className={
          isGrid
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center"
            : "space-y-4"
        }
      >
        {data.map((item) => {
          const isOutOfStock = item.stock !== undefined && item.stock <= 0;
          const hasDiscount =
            item.originalPriceAED && item.originalPriceAED > item.priceAED;

          const cardContent = (
            <div
              className="flex flex-col h-full"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <div className="relative">
                <img
                  src={item.images?.[0] || item.image || item.img}
                  alt={item.name || item.title}
                  className={
                    isGrid
                      ? "h-[200px] w-full object-cover"
                      : "h-full w-full object-cover max-h-52"
                  }
                />
                <div
                  className="hidden group-hover:flex absolute inset-0 text-center backdrop-blur-sm bg-black/40 justify-center items-center duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Button
                    text={isOutOfStock ? "Out of stock" : "Add to cart"}
                    bgColor={isOutOfStock ? "bg-slate-600" : "bg-fuchsia-500"}
                    textColor={"text-white"}
                    disabled={isOutOfStock}
                    handler={() => {
                      if (!isOutOfStock) {
                        onAddToCart?.(item);
                      }
                    }}
                  />
                </div>
                {item.badge && (
                  <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wide bg-fuchsia-500 text-white px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                {isOutOfStock && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wide bg-slate-700 text-slate-100 px-3 py-1 rounded-full">
                    Out of stock
                  </span>
                )}
              </div>
              <div className="px-4 pt-4 pb-5 text-left flex-1 flex flex-col">
                <p className="text-[11px] uppercase tracking-[0.2em] text-fuchsia-400 mb-1">
                  {item.categoryLabel || item.category}
                </p>
                <h2 className="font-semibold text-sm sm:text-base text-white line-clamp-1">
                  {item.name || item.title}
                </h2>
                <p className="text-[12px] text-slate-400 line-clamp-2 mt-1">
                  {item.shortDescription || item.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-baseline gap-2">
                    <h2 className="font-bold text-fuchsia-300">
                      {formatAED(item.priceAED)}
                    </h2>
                    {hasDiscount && (
                      <span className="text-[11px] text-slate-400 line-through">
                        {formatAED(item.originalPriceAED)}
                      </span>
                    )}
                  </div>
                  <button
                    className="text-[11px] font-semibold text-slate-300 hover:text-fuchsia-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${item.id}`);
                    }}
                  >
                    View details
                  </button>
                </div>
              </div>
            </div>
          );

          return (
            <div
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className={`group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-lg shadow-black/40 hover:shadow-fuchsia-500/30 hover:-translate-y-1 transition-all duration-300 w-full ${
                isGrid ? "max-w-xs cursor-pointer" : "cursor-pointer"
              }`}
              key={item.id}
            >
              {isGrid ? (
                cardContent
              ) : (
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">{cardContent.props.children[0]}</div>
                  <div className="sm:w-2/3">{cardContent.props.children[1]}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
