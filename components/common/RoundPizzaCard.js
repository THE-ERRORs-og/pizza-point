import { Bebas_Neue } from "next/font/google";
import React from "react";

const RoundPizzaCard = ({ name, img, price = "Starting from $10" }) => {
  return (

    
    <div className=" ">
      <div className="relative  pt-16 pl-4 flex flex-col items-center">
        {/* Pizza Image */}
        <div
          className="shadow-[0_0_12.539px_0_rgba(0,0,0,0.10)] flex flex-col  items-center overflow-hidden"
          style={{
            borderRadius: "13.26831rem 13.26831rem 0.95769rem 0.95769rem",
          }}
        >
          <img
            src={img}
            alt={name}
            className=" translate-y-8 md:translate-y-12 translate-x-1  md:translate-x-1.5 z-1 w-[85%] aspect-square rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Bottom Label */}
        <div className="absolute bottom-[-20] md:bottom-[-40] z-1 -mt-4 bg-yellow-400 px-4 py-2 w-[85%] rounded-xl flex justify-between items-center shadow-md">
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
                strokeWidth="0.896247"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* <ArrowUpRight className="text-white w-8 h-8" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};


const bebas = Bebas_Neue({
  weight: "400",
});
const MenuRoundedCard = ({ name, img, data }) => {
  return (
    <div className="bg-white shadow-xl rounded-b-[2rem] rounded-t-[10rem] pt-10 pb-6 w-[80%] h-[300px] max-w-xs mx-auto flex flex-col items-center text-center relative overflow-hidden">
      {/* Pizza Image */}
      <img
        src={img}
        alt={name}
        className="w-[50%] aspect-square rounded-full object-cover shadow-md mb-4"
      />

      {/* Title */}
      <h3
        className={`text-4xl font-bold text-[#D32F2F] uppercase mb-2 ${bebas.className} font-bold `}
      >
        {name}
      </h3>

      {/* Ingredients / Description */}
      <p className="text-gray-700 text-sm leading-relaxed">{data}</p>
    </div>
  );
};

export { RoundPizzaCard, MenuRoundedCard };
