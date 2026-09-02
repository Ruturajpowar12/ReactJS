import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <NavLink to="/" className="text-2xl font-bold text-gray-900">
          Simple<span className="text-blue-600">Shop</span>
        </NavLink>

        {/* Navigation */}

        <div className="flex items-center gap-6">
          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/products" className={navStyle}>
            Products
          </NavLink>

          <NavLink to="/cart" className={navStyle}>
            Cart
          </NavLink>

          <NavLink
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
