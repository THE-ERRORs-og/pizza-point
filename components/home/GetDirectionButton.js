"use client";
import { ArrowRight } from 'lucide-react';
import React from 'react';

const GetDirectionButton = () => {
  // Add scroll function
  const scrollToLocation = () => {
    "use client";
    // Scroll to the location section smoothly
    const locationSection = document.getElementById("location-section");
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={scrollToLocation}
      className="group pt-3.5 pb-3.5 md:ml-12 text-[1rem] leading-[0.70681rem] md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.5rem] font-medium rounded-xl mt-4 md:mt-8 inline-block transition-all duration-300 text-black"
    >
      Get Direction{" "}
      <ArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2 " />
    </button>
  );
}

export default GetDirectionButton;
