"use client";
import { AlignJustify, Cross, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import MainButton from "../common/MainButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const menuDrawerRef = useRef(null); 

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Menu", path: "/menu" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <header className="flex z-10 w-screen justify-between items-center px text-black font-normal text-xl">
        <div className="hidden lg:flex justify-start space-x-6 w-full">
          <Link href="/" key="Home" className={`nav-hover`}>
            Home
          </Link>
          <Link href="/contact-us" key="Contact Us" className={`nav-hover`}>
            Contact Us
          </Link>
        </div>

        <img src="/logo/logo.png" alt="logo" className="logo-img" />
        <div className="hidden lg:flex justify-end space-x-6 w-full">
          <Link href="/menu" key="Menu" className={`nav-hover`}>
            Menu
          </Link>
          <MainButton text="Order Online" className="!text-[1.25rem]" />
        </div>

        {/* tab and mobile */}
        <div className="flex lg:hidden bg-secondary3 p-2 rounded-xl">
          <AlignJustify
            onClick={toggleMenu}
            className=" justify-end space-x-10 text-white "
          />
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-full z-50 flex flex-col items-start pl-8 gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-out transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
          ref={menuDrawerRef}
        >
          <button
            aria-label="Close menu"
            aria-expanded={isOpen}
            className="fixed right-4 top-3 block bg-secondary3  p-2 rounded-xl lg:hidden"
            onClick={toggleMenu}
          >
            <X className=" justify-end text-primary  " />
          </button>

          {menuItems.map((item) => (
            <div
              className="flex space-x-10 pt-2 mt-2 w-full p-[0.625rem] items-center justify-center rounded-[0.75rem] bg-primary text-white"
              key={item.name}
            >
              <Link
                href={item.path}
                onClick={toggleMenu}
                className="text-white text-[1.5rem] font-normal loading-[2rem] transition duration-300"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
