import TestimonialSwiper from "@/components/common/TestimonialSwiper";
import Hero from "@/components/home/Hero";
import LocationSection from "@/components/home/LocationSection";
import Offers from "@/components/home/Offers";
import ReviewsSection from "@/components/home/ReviewsSection";

import TopPicksSection from "@/components/home/TopPicksSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px">
      <Hero />
      <TopPicksSection />
      <Offers />
      <ReviewsSection />
      <LocationSection/>

      
    </div>
  );
}
