import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { useProducts } from "../../context/ProductContext";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Cart",
    link: "/cart",
  },
  {
    id: 2,
    name: "Blog Section",
    link: "/#blog",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const { search, setSearch } = useProducts();
  const { itemCount } = useCart();
  const { user, logout } = useAuth();

  const [localSearch, setLocalSearch] = React.useState(search);

  React.useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  // Debounce search term updates into product context
  React.useEffect(() => {
    const handle = setTimeout(() => {
      setSearch(localSearch);
    }, 300);
    return () => clearTimeout(handle);
  }, [localSearch, setSearch]);
  const navLinkClasses =
    "inline-block px-4 font-semibold text-gray-400 hover:text-white duration-200";

  return (
    <div className="bg-black/70 backdrop-blur-xl border-b border-white/5 text-white duration-200 sticky top-0 z-40">
      <div className="py-3">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-2xl sm:text-3xl font-black tracking-[0.25em] uppercase text-fuchsia-400"
            >
              Eshop
            </Link>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {MenuLinks.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `${navLinkClasses} ${
                          isActive ? "text-fuchsia-400" : ""
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                {/* Dropdown  */}
                <li className="relative cursor-pointer group">
                  <button className="flex items-center gap-[2px] font-semibold text-gray-400 hover:text-white py-2">
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </button>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[220px] rounded-xl bg-slate-900/95 shadow-2xl border border-white/10 p-2">
                    <ul className="space-y-1 text-sm">
                      {DropdownLinks.map((item) => (
                        <li key={item.id}>
                          {item.link.startsWith("/#") ? (
                            <a
                              href={item.link}
                              className="text-gray-400 hover:text-white duration-200 inline-block w-full px-3 py-2 hover:bg-white/5 rounded-lg font-medium"
                            >
                              {item.name}
                            </a>
                          ) : (
                            <NavLink
                              to={item.link}
                              className="text-gray-400 hover:text-white duration-200 inline-block w-full px-3 py-2 hover:bg-white/5 rounded-lg font-medium"
                            >
                              {item.name}
                            </NavLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <label className="sr-only" htmlFor="navbar-search">
                Search products
              </label>
              <input
                id="navbar-search"
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search gear"
                className="search-bar bg-slate-900/80 text-sm text-gray-200 placeholder:text-gray-500"
              />
              <IoMdSearch className="text-xl text-gray-400 group-hover:text-fuchsia-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Auth actions */}
            {user ? (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/account"
                  className="px-3 py-1.5 rounded-full border border-slate-700 text-xs font-medium text-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  {user.name || user.email}
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="px-3 py-1.5 rounded-full bg-slate-800 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3 py-1.5 rounded-full bg-fuchsia-500 text-xs font-semibold text-white hover:bg-fuchsia-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-1.5 rounded-full border border-slate-700 text-xs font-medium text-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* Cart button (navigates to cart page) */}
            <Link
              to="/cart"
              className="relative p-3 rounded-full bg-slate-900/80 border border-fuchsia-500/40 hover:border-fuchsia-400 hover:bg-slate-900 shadow-lg shadow-fuchsia-500/20 transition-colors"
              aria-label={`Cart with ${itemCount} items`}
            >
              <FaCartShopping className="text-xl text-fuchsia-300" />
              {itemCount > 0 && (
                <div className="w-4 h-4 bg-emerald-500 text-white rounded-full absolute -top-0.5 -right-0.5 flex items-center justify-center text-[10px] font-semibold">
                  {itemCount}
                </div>
              )}
            </Link>
            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
