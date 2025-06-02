import Head from "next/head";
import React from "react";
import Headline from "./Headline";
import OfferCard from "../common/OfferCard";

const LocationSection = () => {
  return (
    <div id="location-section">
      <Headline leftText="Our" specialText="Location" />
      <div className=" my h-[13.5rem] md:h-[22.125rem] lg:h-[40.0625rem] space-x-4 flex items-center justify-between pt-4 pb-4">
        <div className="hidden md:flex w-full h-full">
          <OfferCard />
        </div>
        <div className="md:flex h-full w-full rounded-[0.37194rem] md:rounded-[0.81463rem] lg:rounded-[1.39706rem]">
          <iframe
            title="Google Maps Location"
            className=" rounded-[0.37194rem] md:rounded-[0.81463rem] lg:rounded-[1.39706rem] w-full h-full  shadow-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.255369387914!2d-122.33684678826185!3d47.465452871057074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549045fd4024bb53%3A0xa783ecece061a88f!2sPizza%20Point!5e0!3m2!1sen!2sin!4v1748852179900!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
