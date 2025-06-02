import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import MainButton from "../common/MainButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative h-[80vh] md:h-[40vh] py-10 px-6 md:px-20  overflow-hidden">
      {/* //slice */}
      <img
        src="/offers/offer-img-art/img1.png"
        alt="img1"
        className="absolute w-65 left-[75%] md:top-[7%] md:left-[0%] w-[10.57319rem] md:w-[6.26075rem] lg:w-[10.95806rem] opacity-50"
      />
      {/* group of bhindi */}
      <img
        src="/offers/offer-img-art/img2.png"
        alt="img2"
        className="absolute right-0  hidden md:flex md:w-[7.52331rem] lg:w-[7.00131rem] opacity-50"
      />
      {/* tomato */}
      <img
        src="/offers/offer-img-art/img3.png"
        alt="img3"
        className="absolute right-[10%] top-[5%] w-[1.51513rem] md:w-[1.68175rem] lg:w-[3.0625rem] opacity-50"
      />
      {/* //slice2 */}
      <img
        src="/offers/offer-img-art/img4.png"
        alt="img4"
        className="absolute left-[0%] md:bottom-[82%] md:right-[45%] w-[7.49406rem] md:w-[3.87831rem] lg:w-[7.0625rem] opacity-50"
      />
      {/* //pizza plate */}
      <img
        src="/offers/offer-img-art/img5.png"
        alt="img5"
        className="absolute top-[75%]  md:top-[65%] right-0 w-[12.37675rem] md:w-[8.2345rem] lg:w-[14.91044rem] opacity-50"
      />
      {/* half pizza */}
      <img
        src="/offers/offer-img-art/img6.png"
        alt="img6"
        className="absolute rotate-[-90deg] right-[50%] top-22 md:top-32 lg:top-20  opacity-50 hidden md:flex md:w-[6.78675rem] lg:w-[12.35881rem]"
      />
      <img
        src="/offers/offer-img-art/img7.png"
        alt="img7"
        className="absolute top-[80%] left-[1%] md:top-[70%] md:left-[5%] w-[10.09213rem] md:w-[5.45163rem] lg:w-[10.25rem]"
      />
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
        {/* Location */}
        <div>
          <h2 className="text-xl font-bold">LOCATION</h2>
          <p className="mt-2 text-lg font-medium">Burien</p>
          <p className="text-md">15321 1st Ave S, Burien,</p>
          <p className="text-md">Washington, 98148</p>
        </div>

        {/* Logo and Socials */}
        <div>
          {/* Logo */}
          <div className="inline-block  mb-4">
            <img
              src="/logo/logo.png"
              alt="logo"
              className="w-[14.45069rem] md:w-[17.70125rem] lg:w-[24.03206rem] "
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 text-2xl mt-2">
            <a href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-black hover:text-gray-700" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-700" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h2 className="text-xl font-bold">HOURS</h2>
          <p className="mt-2 text-lg font-medium">open 7 days a week</p>
          <p className="text-md mb-4">24 hours!</p>
          <Link
            href="https://order.online/store/pizza-point-burien-33810221/?hideModal=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MainButton text="Order Online" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
