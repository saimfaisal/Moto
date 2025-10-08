import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiOutlineMenu, HiX } from "react-icons/hi"; 
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"; // ✅ useAuth import

const Navlink = [
  { id: "1", name: "HOME", link: "/" },
  { id: "2", name: "ABOUT", link: "/about" },
  { id: "3", name: "CAR DETAILING", link: "/detailing" },
  { id: "4", name: "CONTACT US", link: "/contact" },
  { id: "5", name: "PRICING", link: "/pricing" },
  { id: "6", name: "SERVICES", link: "/services" },
  { id: "7", name: "CARWASH", link: "/carwash" },
];

function Navbar({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // ✅ get user & logout

  // Handlers
  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <nav className="shadow-md bg-white dark:bg-black dark:text-white duration-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <h1 className="text-3xl font-serif font-bold">MotoBath</h1>

          {/* Desktop Links */}
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
                          ? "text-primary border-b-2 border-primary"
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

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
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

            {/* Auth Buttons */}
            <div className="hidden md:flex gap-3">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn text-red-600 px-3 py-2 rounded-md border-red-600 border-2 dark:bg-neutral-800 hover:bg-red-600 hover:text-white duration-300"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={handleLogin}
                    className="btn text-primary px-3 py-1 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300"
                  >
                    Login
                  </button>
                  <button
                    onClick={handleSignup}
                    className="btn text-primary px-3 py-2 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300"
                  >
                    Signup
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-3xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-black px-4 py-4 border-t dark:border-neutral-700">
            <ul className="flex flex-col gap-4">
              {Navlink.map((data) => (
                <li key={data.id}>
                  <NavLink
                    to={data.link}
                    className={({ isActive }) =>
                      `block py-2 text-lg font-medium transition-colors duration-500 
                      ${
                        isActive
                          ? "text-primary border-b-2 border-primary"
                          : "hover:text-primary"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-2 mt-4">
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="btn text-red-600 px-3 py-2 rounded-md border-red-600 border-2 dark:bg-neutral-800 hover:bg-red-600 hover:text-white duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        handleLogin();
                        setIsOpen(false);
                      }}
                      className="btn text-primary px-3 py-2 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        handleSignup();
                        setIsOpen(false);
                      }}
                      className="btn text-primary px-3 py-2 rounded-md border-primary border-2 dark:bg-neutral-800 hover:bg-primary hover:text-white duration-300"
                    >
                      Signup
                    </button>
                  </>
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
