import  {RoundPizzaCard, MenuRoundedCard } from "@/components/common/RoundPizzaCard";
import Hero from "@/components/home/Hero";
import TopPicks from "@/components/home/TopPicks";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function page() {
  const pizzaData = [
    {
      id: 1,
      type: "Veggie Pizzas",
      name: "Veggie Supreme",
      desc: "A delightful mix of fresh vegetables on a classic pizza base.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 10,
    },
    {
      id: 2,
      type: "Veggie Pizzas",
      name: "Mushroom Delight",
      desc: "A savory pizza topped with mushrooms and herbs.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 12,
    },
    {
      id: 3,
      type: "Veggie Pizzas",
      name: "Cheese Burst",
      desc: "A cheesy delight with a burst of flavors.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 15,
    },
    {
      id: 4,
      type: "Specially Paneer Pizzas (Vegies)",
      name: "Paneer Tikka",
      desc: "A spicy paneer tikka pizza with a tangy sauce.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 14,
    },
    {
      id: 5,
      type: "Specially Paneer Pizzas (Vegies)",
      name: "Paneer Makhani",
      desc: "A creamy paneer makhani pizza with a rich sauce.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 16,
    },
    {
      id: 6,
      type: "Specially Paneer Pizzas (Vegies)",
      name: "Paneer Tandoori",
      desc: "A tandoori paneer pizza with a smoky flavor.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 18,
    },
    {
      id: 7,
      type: "Traditional Pizzas",
      name: "Margherita",
      desc: "A classic Margherita pizza with fresh basil and mozzarella.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 9,
    },
    {
      id: 8,
      type: "Traditional Pizzas",
      name: "Pepperoni",
      desc: "A spicy pepperoni pizza with a crispy crust.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 11,
    },
    {
      id: 9,
      type: "Traditional Pizzas",
      name: "BBQ Chicken",
      desc: "A tangy BBQ chicken pizza with a smoky flavor.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 13,
    },
    {
      id: 10,
      type: "Traditional Pizzas",
      name: "Hawaiian",
      desc: "A sweet and savory Hawaiian pizza with pineapple and ham.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 17,
    },
    {
      id: 11,
      type: "BreadSticks",
      name: "Garlic Breadsticks",
      desc: "Soft and buttery garlic breadsticks served with marinara sauce.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 5,
    },
    {
      id: 12,
      type: "BreadSticks",
      name: "Cheesy Breadsticks",
      desc: "Cheesy breadsticks topped with herbs and spices.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 6,
    },
    {
      id: 13,
      type: "BreadSticks",
      name: "Spicy Breadsticks",
      desc: "Spicy breadsticks with a kick of flavor.",
      image: "/pizza-img/pizza1.png",
      recommended: true,
      startingPrice: 7,
    },
  ];
  return (
    <div className="flex flex-col px">
      <TopPicks leftText="Our" specialText="Menu" rightText="" right={true} />
      <h3 className="sub-heading2 font-amaranth">Our Recommendation</h3>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex flex-wrap justify-center sm:justify-between gap-y-8">
          {pizzaData.map((pizza) => (
            <div key={pizza.id} className="mb-6 w-[50%] lg:w-[25%]">
            <MenuRoundedCard
              key={pizza.id}
              name={pizza.name}
              data={`Starting from $${pizza.startingPrice}`}
              img={pizza.image}
            />
            </div>
          ))}
        </div>
      </div>
  );
}
