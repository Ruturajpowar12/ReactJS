import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = ({ isActive }) =>
    isActive ? "text-blue-600 font-bold" : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="w-full flex justify-between items-center bg-blue-200 p-5">
      <NavLink to="/">
        <h1 className="text-blue-600 ml-15 text-2xl font-extrabold">
          Click <span className="text-black">Shop</span>
        </h1>
      </NavLink>

      <ul className="flex gap-10 mr-10 text-2xl font-bold text-blue-800">
        <li>
          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={navStyle}>
            Contact
          </NavLink>
        </li>
      </ul>

      <NavLink to="/login">
        <span className="text-white bg-blue-700 font-bold text-lg mr-10 px-7 py-2 rounded-xl shadow-2xl">
          Login
        </span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
