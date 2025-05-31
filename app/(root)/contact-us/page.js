import React from "react";

export default function Page() {
  return (
    <div className="px-4 md:px-16 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="   text-[2rem] leading-[1.89994rem] md:text-[3rem] md:leading-[2.91563rem] lg:text-[4.75rem] lg:leading-[5rem] font-normal text-primary1">
            Get In <span className="text-secondary1 font-dafoe">Touch</span>{" "}
            <span className="text-secondary1">!</span>
            <img
              src="/img/pizza-slice.png"
              alt="pizza slice"
              className="w-[0.80731rem] h-[1.63906rem] md:w-[1.23888rem] md:h-[2.51519rem] lg:w-[2.125rem] lg:h-[4.3125rem] mb-1 md:mb-2 lg:mb-4 inline"
            />
          </h1>
          <p className="text-[#737373BF] w-[75%] text-[1rem] md:text-[1.5rem]">
            We love hearing about your experience with our fresh food,
            handcrafted shakes, and homemade sauces.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="placeholder-[#836464] placeholder:text-[1.2rem] w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className=" placeholder-[#836464] placeholder:text-[1.2rem] w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Enter Your Complaint"
              rows="4"
              className=" placeholder-[#836464] placeholder:text-[1.2rem] w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="bg-primary1 text-white text-[1.2rem] font-semibold py-3 w-full rounded-lg hover:bg-red-700 transition duration-200"
            >
              Submit Complaint Form
            </button>
          </form>
        </div>

        {/* Pizza Image */}
        <div className="bg-red-200 relative md:flex md:w-1/2 justify-center items-center  ">
          {/* <div className="hidden lg:flex lg:h-110 lg:w-110 absolute rounded-full shadow-xl ring-4 ring-yellow-200 "></div> */}
          <img
            src="/contact-us/pizza-plate.png"
            alt="Pizza Plate"
            className="w-[85%]  md:left-20 z-2 absolute "
          />
        </div>
      </div>
    </div>
  );
}
