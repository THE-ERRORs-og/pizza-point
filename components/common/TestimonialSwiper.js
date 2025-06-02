"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonialsData = [
  {
    img: "/testimonial/user1.jpg",
    name: "Brian N",
    role: "Food Enthusiast",
    text: "NEW PLACE REPLACING PIZZA TWIST. People are nice and the food was really good! Ordered the Hawaiian and the Malai Tikka breadsticks! Highly recommend for vegetarians.",
  },
  {
    img: null,
    name: "Sailor Jupiter",
    role: "Local Guide",
    text: "Delicious pizza! There are traditional offerings and specialty choices which combine Indian flavors onto pizza! Owners are very friendly too! Will be coming back for sure.",
  },
  {
    img: null,
    name: "Gurleen Kaur",
    role: "Food Blogger",
    text: "Tried Malai Tikka Chicken Point pizza and it was really delicious! Chocolate milkshake was really yummy! Would 100% recommend it! Staff is really nice and friendly!",
  },
  {
    img: null,
    name: "Levanya Acuna",
    role: "Disappointed Customer",
    text: "Stay away, don't go here. Pizza was undercooked and gave my entire family the worst food poisoning. Overpriced for terrible quality food and service.",
  },
  {
    img: null,
    name: "Boss Burger",
    role: "Restaurant Staff",
    text: "Best spot to order pizza. We always order our staff pizza from this location. They just changed their name to Pizza Point and it even tastes better than before.",
  },
];

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const Testimonials = () => {
  return (
    <div className="w-full px-4 py-10">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 2.7 },
          1280: { slidesPerView: 2.3 },
        }}
        className="mySwiper"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card h-[400px] flex flex-col justify-between">
              <div className="flex items-start space-x-4">
                {testimonial.img ? (
                  <img
                    src={testimonial.img}
                    alt="Profile"
                    className="md:w-36 md:h-36 w-24 h-24 object-top object-cover rounded-xl"
                  />
                ) : (
                  <div className="md:w-36 md:h-36 w-24 h-24 flex items-center justify-center bg-gray-300 text-white text-3xl font-bold rounded-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-[1.85531rem] md:text-[2.48963rem] lg:text-[3.9375rem] font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-xl font-semibold">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-[0.89725remrem] md:text-[0.94844rem] lg:text-[1.5rem]">
                “{truncateText(testimonial.text, 150)}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
