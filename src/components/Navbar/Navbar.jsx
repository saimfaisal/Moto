import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { NavLink } from "react-router-dom"; // ✅ Import NavLink

const Navlink = [
  { id: "1", name: "HOME", link: "/" },
  { id: "2", name: "ABOUT", link: "/about" },
  { id: "3", name: "CAR DETAILING", link: "/detailing" },
  { id: "4", name: "CONTACT US", link: "/contact" },
  { id: "5", name: "PRICING", link: "/pricing" },
  { id: "6", name: "SERVICES", link: "/services" },
  { id: "7", name: "CARWASH", link: "/carwash" },
];

function Navbar({ theme, setTheme, onLoginClick, onSignupClick }) {
  return (
    <nav className="shadow-md bg-white dark:bg-black dark:text-white duration-500">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-3xl font-serif font-bold">MotoBath</h1>
          </div>

          {/* Links */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {Navlink.map((data) => (
                <li className="py-4" key={data.id}>
                  <NavLink
                    to={data.link}
                    className={({ isActive }) =>
                      `inline-block py-2 transition-colors duration-500 text-lg font-medium 
                      ${
                        isActive
                          ? "text-primary border-b-2 border-primary" // ✅ Active style
                          : "hover:text-primary hover:border-b-2 hover:border-primary"
                      }`
                    }
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle */}
          <div>
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onLoginClick}
              className="btn text-primary px-3 py-1 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300 dark:hover:bg-primary"
            >
              Login
            </button>
            <button
              onClick={onSignupClick}
              className="btn text-primary px-3 py-2 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300 dark:hover:bg-primary"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
