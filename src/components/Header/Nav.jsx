"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const navlinks = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about-us" },
  { label: "Courses", link: "/Courses" },
  { label: "Contact Us", link: "/contact-us" },
];

const Nav = () => {
  const [isSide, setIsSide] = useState(false);
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between py-4 px-6 shadow-md sticky top-0 bg-white dark:bg-[#091930] z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/images/Scarftech-logo.webp"
          alt="Scarftech Logo"
          className="h-14 w-auto"
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 items-center text-sm md:text-sm font-medium">
        {navlinks.map(({ label, link }) => (
          <li key={link}>
            <Link
              to={link}
              className={`transition-all duration-300 ${
                location.pathname === link
                  ? "text-[#07bc0c] font-semibold"
                  : "hover:text-[#07bc0c] dark:hover:text-[#07bc0c]"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Verify Certificate Button */}
      <a
        href="https://scaftechservices.com/verify-certificate"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-block px-4 mr-24 py-2 bg-[#07bc0c] text-white font-semibold rounded hover:bg-[#06a30b] transition"
      >
        Verify Certificate
      </a>

      {/* Mobile Menu Button */}
      {/* Mobile - Verify Button before Hamburger */}
      <div className="flex items-center md:hidden gap-2">
        <a
          href="https://scaftechservices.com/verify-certificate"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-[#07bc0c] text-white font-semibold rounded hover:bg-[#06a30b] transition text-xs"
        >
          Verify Certificate
        </a>

        <button
          aria-label="Open menu"
          aria-expanded={isSide}
          className="text-gray-700 dark:text-gray-200"
          onClick={() => setIsSide(true)}
        >
          <TiThMenu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSide && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSide(false)}
            />
            <motion.aside
              className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white dark:bg-gray-900 shadow-xl p-6 z-50 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button
                aria-label="Close menu"
                onClick={() => setIsSide(false)}
                className="text-2xl mb-6 text-gray-700 dark:text-gray-200 self-end"
              >
                <IoCloseOutline />
              </button>

              <ul className="flex flex-col gap-6 overflow-y-auto">
                {navlinks.map(({ label, link }) => (
                  <li key={link}>
                    <Link
                      href={link}
                      onClick={() => setIsSide(false)}
                      className={`transition-all duration-300 ${
                        location.pathname === link
                          ? "text-[#07bc0c] font-semibold"
                          : "hover:text-[#07bc0c] dark:hover:text-[#07bc0c]"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}

              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
