import { NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { navLinks } from "./Header";

type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
  return (
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
  );
}
