import React from "react";

import Headline from "./Headline";
import { RoundPizzaCard } from "../common/RoundPizzaCard";
import { pizzaData } from "@/lib/data";

const TopPicksSection = () => {
  return (
    <div className="">
      <Headline leftText="Top Picks" specialText="For" rightText="You" />
      <div className="flex flex-wrap justify-around   gap-2 ">
        {/* <RoundPizzaCard
          name="Veggie Pizzas"
          price="Starting from $10"
          img="/pizza-img/pizza1.png"
        /> */}
        {pizzaData
          .filter((pizza) => pizza.topPicks === true)
          .slice(0, 6)
          .map((pizza) => (
            <div key={pizza.id} className="mb-6 w-[50%] lg:w-[25%]">
              <RoundPizzaCard
                name={pizza.name}
                price={`Starting from $${pizza.startingPrice}`}
                img={pizza.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopPicksSection;
