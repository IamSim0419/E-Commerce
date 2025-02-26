import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useState } from "react";

const navLinks = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "COLLECTION",
    path: "/collection",
  },
  {
    name: "ABOUT",
    path: "/about",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="flex justify-between items-center py-5 font-medium">
      {/* Logo */}
      <img className="w-36" src={assets.logo} alt="" />

      {/* Navigation Links */}
      <nav className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="flex flex-col items-center gap-1"
          >
            <p>{link.name}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </nav>

      {/* Search, Profile(Dropdown-menu) and Cart Icons */}
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="Profile Icon"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="hover:text-black cursor-pointer">My Profile</p>
              <p className="hover:text-black cursor-pointer">Orders</p>
              <p className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="Cart Icon" className="w-5 min-w-5" />
          <span className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white aspect-square rounded-full text-[8px] flex justify-center items-center">
            15
          </span>
        </Link>

        {/* Menu Icon */}
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menu_icon}
          alt="Menu Icon"
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "w-full" : "w-0"
        } absolute top-0 right-0 bottom-0 overflow-hidden bg-slate-200 transition-all duration-500 ease-in-out sm:hidden`}
      >
        <div className="text-gray-600">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
              className="h-4 rotate-180"
            />
            <span>Back</span>
          </div>
          <nav className="flex flex-col gap-5 text-center text-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="py-2 pl-6 border"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
