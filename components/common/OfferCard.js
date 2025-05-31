import { ArrowRight } from 'lucide-react'
import React from 'react'

const OfferCard = () => {
  return (
     <div className=" bg-primary3 h-full w-full rounded-[0.37194rem] md:rounded-[0.81463rem] lg:rounded-[1.39706rem] pl-12">
        <div className="w-[78%] flex flex-col items-start justify-center h-full">
          <h3 className="offer-text">Get you favourite pizza at 25% off</h3>
          <button className="group pb-3.5  text-[1.25444rem] leading-[0.70681rem] md:text-[1.40031rem] md:leading-[1.5rem] lg:text-[1.75rem] lg:leading-[1.5rem] font-medium rounded-xl mt-4 md:mt-8 inline-block transition-all duration-300 text-black">
            Order Online{" "}
            <ArrowRight className="inline transition-transform duration-300 group-hover:translate-x-2 " />
          </button>
        </div>
      </div>
  )
}

export default OfferCard
