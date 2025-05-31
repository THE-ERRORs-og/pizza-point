import React from "react";


import RoundPizzaCard from "../common/RoundPizzaCard";
import Headline from "./Headline";

const TopPicksSection = () => {
  return (
    <div className=" px">
      <Headline leftText="Top Picks" specialText="For" rightText="You" />
      <div className="flex  flex-wrap justify-center md:justify-center sm:justify-between gap-y-8 gap-x-2 lg:gap-x-[42px]">
        <RoundPizzaCard
          name="Veggie Pizzas"
          price="Starting from $10"
          img="/pizza-img/pizza1.png"
        />
        <RoundPizzaCard
          name="Veggie Pizzas"
          price="Starting from $10"
          img="/pizza-img/pizza1.png"
        />
        <RoundPizzaCard
          name="Veggie Pizzas"
          price="Starting from $10"
          img="/pizza-img/pizza1.png"
        />
        <RoundPizzaCard
          name="Veggie Pizzas"
          price="Starting from $10"
          img="/pizza-img/pizza1.png"
        />
        <RoundPizzaCard
          name="Veggie Pizzas"
          price="Starting from $10"
          img="/pizza-img/pizza1.png"
        />
        <RoundPizzaCard
          name="Veggie Pizzas"
          price="Starting from $10"
          img="/pizza-img/pizza1.png"
        />
      </div>
    </div>
  );
};

export default TopPicksSection;
