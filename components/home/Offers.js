import { ArrowRight } from "lucide-react";
import React from "react";
import OfferCard from "../common/OfferCard";

const Offers = () => {
  return (
    <div className=" my h-[13.5rem] md:h-[22.125rem] lg:h-[40.0625rem] space-x-4 flex items-center justify-between pt-4 pb-4">
      <div className="hidden md:flex h-full w-full rounded-[0.37194rem] md:rounded-[0.81463rem] lg:rounded-[1.39706rem]">
        <img
          src="/offers/offer-img.jpg"
          alt="offer-img"
          className="object-cover h-full w-full rounded-[0.37194rem] md:rounded-[0.81463rem] lg:rounded-[1.39706rem] "
        />
      </div>
      <OfferCard />
    </div>
  );
};

export default Offers;
