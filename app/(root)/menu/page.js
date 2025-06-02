"use client";

import {
  RoundPizzaCard,
  MenuRoundedCard,
} from "@/components/common/RoundPizzaCard";

import React, { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "@/lib/utils"; // optional: classnames helper
import { pizzaData } from "@/lib/data";

export default function Page() {
  const [open, setOpen] = useState(false);

  // Extract unique pizza types
  const uniqueTypes = useMemo(() => {
    const types = pizzaData.map((pizza) => pizza.type);
    return ["All", ...new Set(types)];
  }, []);

  // Initialize selected type with the first pizza type (not "All")
  const [selectedType, setSelectedType] = useState(uniqueTypes[1] || "All");

  // Filter pizzas based on selected type
  const filteredPizzas = useMemo(() => {
    if (selectedType === "All") {
      return pizzaData;
    }
    return pizzaData.filter((pizza) => pizza.type === selectedType);
  }, [selectedType]);

  return (
    <div className="flex flex-col px">
      <div className="flex items-center w-full">
        <div
          className="flex-1  h-8 md:h-16  mr-4  bg-repeat-x bg-center"
          style={{
            backgroundImage: "url('/art-img/combined.png')", // replace with your actual pizza icon path
            backgroundSize: "auto 100%",
            opacity: 1,
          }}
        />
        {/* Text Section */}

        <h2 className="sub-heading w-fit whitespace-nowrap text-lg md:text-xl lg:text-2xl font-semibold">
          Our
          <span className="font-dafoe text-primary1"> Menu</span>{" "}
        </h2>

        {/* Repeating Pizza Icons */}
        <div
          className="flex-1 h-8 md:h-16 ml-4 bg-repeat-x bg-center"
          style={{
            backgroundImage: "url('/art-img/combined.png')", // replace with your actual pizza icon path
            backgroundSize: "auto 100%",
            opacity: 1,
          }}
        />
      </div>

      <h3 className="sub-heading2 font-amaranth">Our Recommendation</h3>
      <div className="flex flex-wrap justify-center sm:justify-between gap-y-8">
        {pizzaData
          .filter((pizza) => pizza.recommended === true)
          .slice(0, 4)
          .map((pizza) => (
            <div key={pizza.id} className="mb-6 w-[50%] lg:w-[25%]">
              <MenuRoundedCard
                name={pizza.name}
                // data={`Starting from $${pizza.startingPrice}`}
                data={pizza.desc}
                img={pizza.image}
              />
            </div>
          ))}
      </div>

      <div className="w-full mb-2 flex items-center justify-center py-2">
        <Select
          onOpenChange={(val) => setOpen(val)}
          onValueChange={(value) => setSelectedType(value)}
          defaultValue={selectedType}
        >
          <SelectTrigger className="w-full md:w-1/3 bg-primary1 text-white font-bold rounded-t-md px-4 py-2 justify-between hover:bg-red-700">
            <SelectValue
              placeholder="Select Pizza Type"
              className="placeholder:text-white"
            />
            <ChevronDownIcon
              className={cn(
                "w-10 h-10 text-white transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          </SelectTrigger>

          <SelectContent className="w-full rounded-md border border-gray-200 shadow-md">
            <div className="bg-white py-2 px-4 text-gray-700 space-y-2 text-[1rem] font-medium">
              {uniqueTypes.map((type) => (
                <SelectItem
                  key={type}
                  value={type}
                  className="hover:bg-gray-100 cursor-pointer"
                >
                  {type}
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap md:justify-center sm:justify-between gap-y-8">
        {filteredPizzas.map((pizza) => (
          <div key={pizza.id} className="mb-6 w-[50%] lg:w-[25%]">
            <MenuRoundedCard
              key={pizza.id}
              name={pizza.name}
              // data={`Starting from $${pizza.startingPrice}`}
              data={pizza.desc}
              img={pizza.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
