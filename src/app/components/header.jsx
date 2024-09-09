"use client";
import React, { useState, useEffect } from "react";
import BrandLogo from "@/assets/images/cropped-Group-1.png";
import Image from "next/image";
import Link from "next/link";
import SearchLogo from "@/assets/icons/search.svg";
import UserLogo from "@/assets/icons/user.svg";
import CartLogo from "@/assets/icons/cart.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact-us" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true); // Initial state is sticky
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // User is scrolling down and passed 100px
        setIsSticky(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // User is scrolling up or near the top
        setIsSticky(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out ${
        isSticky
          ? "transform translate-y-0 opacity-100"
          : "transform -translate-y-full opacity-0"
      }`}
      style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }} // Adjust transition duration
    >
      <div
        className={`px-4 xl:px-14 py-5 flex justify-between items-center ${
          isMenuOpen ? "border-0 overflow-hidden" : ""
        } bg-white bg-opacity-10 backdrop-blur-lg`} // Blurry background with transparency
      >
        {/* Brand Logo */}
        <div className="flex items-center">
          <Image
            src={BrandLogo}
            alt="brand logo"
            height={50}
            width={130}
            // style={{ filter: "invert(1)" }}
          />
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="p-3 text-sm font-bold whitespace-nowrap hover:text-indigo-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <Image
            src={SearchLogo}
            alt="Search"
            height={24}
            width={24}
            className="cursor-pointer transition-transform transform hover:scale-110"
          />
          <Image
            src={UserLogo}
            alt="User"
            height={24}
            width={24}
            className="cursor-pointer transition-transform transform hover:scale-110"
          />
          <Image
            src={CartLogo}
            alt="Cart"
            height={24}
            width={24}
            className="cursor-pointer transition-transform transform hover:scale-110"
          />
          <Link
            target="_blank"
            href="/login"
            className="bg-black text-white hover:bg-white hover:text-black border-2 rounded-full xl:ml-6 px-12 py-3"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white bg-opacity-10 backdrop-blur-lg p-4 absolute inset-x-0 top-24 h-screen z-40 shadow-lg rounded-b-lg">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={toggleMenu}
                className="text-sm font-bold hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-6 mt-6">
              <Image
                src={SearchLogo}
                alt="Search"
                height={24}
                width={24}
                className="cursor-pointer transition-transform transform hover:scale-110"
              />
              <Image
                src={UserLogo}
                alt="User"
                height={24}
                width={24}
                className="cursor-pointer transition-transform transform hover:scale-110"
              />
              <Image
                src={CartLogo}
                alt="Cart"
                height={24}
                width={24}
                className="cursor-pointer transition-transform transform hover:scale-110"
              />
            </div>
            <Link
              target="_blank"
              href="/login"
              className="bg-indigo-600 text-white rounded-full text-center py-3 px-10 mt-6"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
