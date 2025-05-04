import React from "react";

import TopPicks from "./TopPicks";
import RoundPizzaCard from "../common/RoundPizzaCard";

const TopPicksSection = () => {
  return (
    <div className=" px">
      <TopPicks leftText="Top Picks" specialText="For" rightText="You" />
      <div className="flex flex-wrap justify-center sm:justify-between gap-y-8 gap-x-2 lg:gap-x-[42px]">
        <RoundPizzaCard name="Veggie Pizzas" price ="Starting from $10" img="/pizza-img/pizza1.png" />
        <RoundPizzaCard name="Veggie Pizzas" price ="Starting from $10" img="/pizza-img/pizza1.png" />
        <RoundPizzaCard name="Veggie Pizzas" price ="Starting from $10" img="/pizza-img/pizza1.png" />
        <RoundPizzaCard name="Veggie Pizzas" price ="Starting from $10" img="/pizza-img/pizza1.png" />
        <RoundPizzaCard name="Veggie Pizzas" price ="Starting from $10" img="/pizza-img/pizza1.png" />
        <RoundPizzaCard name="Veggie Pizzas" price ="Starting from $10" img="/pizza-img/pizza1.png" />
        <RoundPizzaCard name="Veggie Pizzas" price ="Starting from $10" img="/pizza-img/pizza1.png" />
        <RoundPizzaCard name="Veggie Pizzas" price ="Starting from $10" img="/pizza-img/pizza1.png" />
      </div>
    </div>
  );
};

export default TopPicksSection;
