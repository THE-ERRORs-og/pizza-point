import React from "react";
import MainButton from "../common/MainButton";
import { ArrowRight } from "lucide-react";
import GetDirectionButton from "./GetDirectionButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" w-full pt-4 pb-8">
      {/* content */}
      <div className="inset-0 flex flex-col justify-center items-center gap-4">
        <h3 className="font-amaranth text-[1.5rem] md:text-[1.03031rem] lg:text-[1.75rem] font-normal text-[#737373]">
          Rated 5 Stars in Google
        </h3>
        <div className="flex gap-[0.39263rem]">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <h1 className=" w-[18.875rem] md:w-[28.125rem] lg:w-1/2 main-heading">
          Hot and <span className="text-secondary1 font-dafoe">Fresh</span>{" "}
          Straight from the oven !
          <img
            src="/img/pizza-slice.png"
            alt="pizza slice"
            className="w-[0.80731rem] h-[1.63906rem] md:w-[1.23888rem] md:h-[2.51519rem] lg:w-[2.125rem] lg:h-[4.3125rem] mb-1 md:mb-2 lg:mb-4 inline"
          />
        </h1>
        {/* buttons */}
        <div className="">
          <Link
            href="https://order.online/store/pizza-point-burien-33810221/?hideModal=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MainButton
              text="Order Online"
              className="text-[1rem] h-[2.2rem] mr-2 w-[6.5rem] md:h-[2.58756rem] md:w-[8.63744rem] lg:h-[3.5rem] lg:w-[14.8125rem] "
            />
          </Link>
          <GetDirectionButton />
        </div>
        <img
          src="https://pub-af531d0497a24cdbb5d20c58edde5c58.r2.dev/pizza_point/DSC05394.jpg"
          alt="hero-banner"
          className="object-cover  w-full lg:h-[44.93838rem] md:h-[25.20444rem]  h-[11.96456rem] rounded-[0.37194rem] md:rounded-[0.81463rem] lg:rounded-[1.39706rem]"
        />
      </div>
    </div>
  );
};

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="31"
      viewBox="0 0 33 31"
      fill="none"
      className="h-[0.80031rem] w-[0.80031rem] md:h-[1.22813rem] md:w-[1.22813rem] lg:h-[2.10613rem] lg:w-[2.10613rem]"
    >
      <path
        d="M16.0393 0L19.8221 11.6423L32.0636 11.6423L22.16 18.8377L25.9428 30.48L16.0393 23.2846L6.13575 30.48L9.91856 18.8377L0.0150146 11.6423L12.2565 11.6423L16.0393 0Z"
        fill="#FFC824"
      />
    </svg>
  );
};
export default Hero;
