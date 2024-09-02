"use client";
import React, { useState } from "react";
import BrandLogo from "@/assets/images/cropped-Group-1.png";
import Image from "next/image";
import Link from "next/link";
import SearchLogo from "@/assets/icons/search.svg";
import UserLogo from "@/assets/icons/user.svg";
import CartLogo from "@/assets/icons/cart.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: "#contact-us" },
  { label: "FAQs", href: "#faqs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white px-4 md:px-12 py-8 flex justify-between items-center">
      <Image src={BrandLogo} alt="brand" height={50} width={130} />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:gap-6">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg font-bold hover:text-indigo-600"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Image
          src={SearchLogo}
          alt="Search"
          height={24}
          width={24}
          className="filter invert"
        />
        <Image
          src={UserLogo}
          alt="user"
          height={24}
          width={24}
          className="filter invert"
        />
        <Image
          src={CartLogo}
          alt="cart"
          height={24}
          width={24}
          className="filter invert"
        />
        {/* Hamburger Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          <FaBars size={24} className="text-white" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 md:hidden`}
      >
        <div className="flex justify-between bg-black text-white items-center mb-8 p-6">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleMenu}>
            <FaTimes size={24} className="text-white z-50" />
          </button>
        </div>

        <ul className="space-y-8 px-6">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block text-lg font-bold text-black hover:text-indigo-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 px-6">
          <Link
            href="#login"
            className="flex items-center text-lg font-bold text-black"
          >
            <Image
              src={UserLogo}
              alt="user"
              height={20}
              width={20}
              className="mr-2"
            />
            Login / Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
