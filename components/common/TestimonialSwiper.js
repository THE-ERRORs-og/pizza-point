"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="w-full px-4 py-10">
      <Swiper
        slidesPerView={1.3} // 1 full + 2 partial
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 2.1, // more partial view on tablet
          },
          1024: {
            slidesPerView: 2.7, // close to full 3 cards visible
          },
          1280: {
            slidesPerView: 2.3, // perfect for large screens
          },
        }}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <SwiperSlide key={i}>
            <div className="testimonial-card">
              <div className="flex items-start space-x-4 ">
                <img
                  src="/testimonial/user1.jpg"
                  alt="Profile"
                  className="md:w-36 md:h-36 w-24 h-24 object-top object-cover  rounded-xl "
                />
                <div>
                  <h3 className="text-[1.85531rem] md:text-[2.48963rem] lg:text-[3.9375rem] font-semibold">
                    Jimmy
                  </h3>
                  <p className="text-xl font-semibold">Software Engineer</p>
                </div>
              </div>

              <p className="mt-4 text-[0.89725remrem] md:text-[0.94844rem] lg:text-[1.5rem] ">
                “Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry standard
                dummy text ever since the 1500s”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
