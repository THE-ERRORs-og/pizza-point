

import React from "react";


const RoundPizzaCard = ({ name, img, price = "Starting from $10" }) => {
  return (
    <div className="w-[calc(50%-9px)] sm:w-[calc(50%-21px)] lg:w-[calc(25%-31.5px)] rounded-xl overflow-hidden">
      <div className="relative flex flex-col items-center  ">
        {/* Semi-circle white background */}

        <div
          className="absolute top-[25%] -translate-y-8 w-full h-[78%] border-2   bg-white z-0"
          style={{
            borderRadius: "13.26831rem 13.26831rem 0.95769rem 0.95769rem",
          }}
        ></div>

        {/* Pizza Image */}
        <img
          src={img}
          alt={name}
          className="relative translate-y-8 md:translate-y-20 translate-x-1  md:translate-x-1.5 z-1 w-[85%] aspect-square rounded-full object-cover shadow-lg"
        />

        {/* Bottom Label */}
        <div className="relative z-1 -mt-4 bg-yellow-400 px-4 py-2 w-[85%] rounded-xl flex justify-between items-center shadow-md">
          <div>
            <h5 className="text-[1rem] pizza-name font-bold text-[#A02E29]">
              {name}
            </h5>
            <p className="text-white pizza-price text-sm">{price}</p>
          </div>
          <div className="bg-primary1 p-0 md:p-2  rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              className="text-white w-8 h-8 lg:w-12 lg:h-12"
            >
              <path
                d="M8.68552 5.64395L14.1382 6.87262M14.1382 6.87262L12.4759 12.2091M14.1382 6.87262L5.60027 11.802"
                stroke="white"
                stroke-width="0.896247"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* <ArrowUpRight className="text-white w-8 h-8" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundPizzaCard;
