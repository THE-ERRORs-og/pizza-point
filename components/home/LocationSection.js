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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.3954046204235!2d-122.36157022355411!3d47.521164493873314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041610e53294d%3A0x9352e45f900f4a91!2s9061%20Delridge%20Wy%20SW%2C%20Seattle%2C%20WA%2098106%2C%20USA!5e0!3m2!1sen!2sin!4v1748677836001!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
