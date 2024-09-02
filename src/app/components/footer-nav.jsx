"use client";
import React from "react";
import Link from "next/link";
import HomeIcon from "@/assets/icons/home.svg";
import UserIcon from "@/assets/icons/user.svg";
import CartIcon from "@/assets/icons/cart.svg";
import Image from "next/image";

export default function FooterMenu() {
  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 py-3 flex justify-between items-center shadow-lg">
      <Link href="#home" className="flex flex-col items-center">
        <Image src={HomeIcon} alt="Home" width={30} height={30} />
        <span className="font-medium text-gray-800 mt-2">Home</span>
      </Link>

      <Link href="#account" className="flex flex-col items-center">
        <Image src={UserIcon} alt="Account" width={30} height={30} />
        <span className="font-medium text-gray-800 mt-2">Account</span>
      </Link>

      <Link href="#cart" className="relative flex flex-col items-center">
        <Image src={CartIcon} alt="Cart" width={30} height={30} />
        <span className="font-medium text-gray-800 mt-2">Cart</span>
      </Link>
    </footer>
  );
}
