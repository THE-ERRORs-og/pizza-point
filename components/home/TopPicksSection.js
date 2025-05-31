import React from "react";

import Headline from "./Headline";
import { RoundPizzaCard } from "../common/RoundPizzaCard";

const TopPicksSection = () => {
  return (
    <div className="">
      <Headline leftText="Top Picks" specialText="For" rightText="You" />
      <div className="flex flex-wrap justify-around   gap-2 ">
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
