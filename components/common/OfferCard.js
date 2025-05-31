import { ArrowRight } from "lucide-react";
import React from "react";

const OfferCard = () => {
  return (
    <div className=" relative overflow-hidden  bg-primary3 h-full w-full rounded-[0.37194rem] md:rounded-[0.81463rem] lg:rounded-[1.39706rem] ">
      <img
        src="/offers/offer-img-art/img1.png"
        alt="img1"
        className="absolute w-65 top-[7%] left-[5%] w-[4.57319rem] md:w-[8.26075rem] lg:w-[14.95806rem] opacity-50"
      />
      <img
        src="/offers/offer-img-art/img2.png"
        alt="img2"
        className="absolute right-0  hidden md:flex md:w-[5.52331rem] lg:w-[10.00131rem] opacity-50"
      />
      <img
        src="/offers/offer-img-art/img3.png"
        alt="img3"
        className="absolute right-[40%] top-[5%] w-[1.51513rem] md:w-[1.68175rem] lg:w-[3.0625rem] opacity-50"
      />
      <img
        src="/offers/offer-img-art/img4.png"
        alt="img4"
        className="absolute bottom-[30%] right-[40%] w-[3.49406rem] md:w-[3.87831rem] lg:w-[7.0625rem] opacity-50"
      />
      <img
        src="/offers/offer-img-art/img5.png"
        alt="img5"
        className="absolute bottom-14 right-0 w-[7.37675rem] md:w-[8.2345rem] lg:w-[14.91044rem] opacity-50"
      />
      <img
        src="/offers/offer-img-art/img6.png"
        alt="img6"
        className="absolute rotate-[-90deg] top-22 md:top-40 lg:top-74  opacity-50 w-[3.84769rem] md:w-[6.78675rem] lg:w-[12.35881rem]"
      />
      <img
        src="/offers/offer-img-art/img7.png"
        alt="img7"
        className="absolute bottom-0 right-[20%] w-[3.09213rem] md:w-[3.45163rem] lg:w-[6.25rem]"
      />
      <div className="relative pl-12 w-[78%] flex flex-col items-start justify-center h-full">
        <h3 className="offer-text">Get you favourite pizza at 25% off</h3>
        <button className="group pb-3.5  text-[1.25444rem] leading-[0.70681rem] md:text-[1.40031rem] md:leading-[1.5rem] lg:text-[1.75rem] lg:leading-[1.5rem] font-medium rounded-xl mt-4 md:mt-8 inline-block transition-all duration-300 text-black">
          Order Online{" "}
          <ArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2 " />
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
