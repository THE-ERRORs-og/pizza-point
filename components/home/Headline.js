"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Headline = ({
  leftText = "",
  rightText = "",
  specialText = "",
  right,
}) => {
  const containerRef = useRef(null);
  const [pizzaCount, setPizzaCount] = useState(0);

  // Estimate size per PizzaArt group (adjust this to match visual size)
  const pizzaArtWidth = 60; // approx width of a pair (image1 + image2 + spacing)
  const minGap = 12;
  const maxPizzaCount = 6;

  useEffect(() => {
    const calculatePizzaCount = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const headingWidth =
        containerRef.current?.querySelector("h2")?.offsetWidth || 0;
      const remainingWidth = containerWidth - headingWidth - 2; // extra spacing

      const totalUnitWidth = pizzaArtWidth + minGap;
      let count = maxPizzaCount;
      while (count > 0 && count * totalUnitWidth > remainingWidth) {
        count--;
      }

      setPizzaCount(count);
    };

    calculatePizzaCount();

    const resizeObserver = new ResizeObserver(calculatePizzaCount);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className=" " ref={containerRef}>
      <div className="flex justify-between items-center w-full overflow-hidden">
        {!right ? (
          // Text on the left, PizzaArt on the right
          <>
            <h2 className="sub-heading w-fit whitespace-nowrap text-lg md:text-xl lg:text-2xl font-semibold">
              {leftText}{" "}
              <span className="font-dafoe text-primary1">{specialText}</span>{" "}
              {rightText}
            </h2>
            {/* <div className="flex items-center gap-3 ml-4 overflow-hidden">
              <AnimatePresence initial={false}>
                {[...Array(pizzaCount)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <PizzaArt />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div> */}
            <div
              className="flex-1 ml-4  h-8 md:h-16  bg-repeat-x bg-center"
              style={{
                backgroundImage: "url('/art-img/combined.png')", // replace with your actual pizza icon path
                backgroundSize: "auto 100%",
                opacity: 1,
              }}
            />
          </>
        ) : (
          // Text on the right, PizzaArt on the left
          <>
            {/* <div className="flex items-center gap-3 mr-4 overflow-hidden">
              <AnimatePresence initial={false}>
                {[...Array(pizzaCount)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <PizzaArt right={right} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div> */}
           <div
              className="flex-1 mr-4  h-8 md:h-16  bg-repeat-x bg-center"
              style={{
                backgroundImage: "url('/art-img/combined.png')", // replace with your actual pizza icon path
                backgroundSize: "auto 100%",
                opacity: 1,
              }}
            />
            <h2 className="sub-heading w-fit whitespace-nowrap text-lg md:text-xl lg:text-2xl font-semibold">
              {leftText}{" "}
              <span className="font-dafoe text-primary1">{specialText}</span>{" "}
              {rightText}
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

const PizzaArt = ({ right = "" }) => {
  return (
    <div className={`flex ${right ? "mr-6" : "ml-6"}`}>
      <img
        src="/art-img/pizza-shape1.png"
        alt="pizza-shape1"
        className="inline sub-heading-art object-contains"
      />
      <img
        src="/art-img/pizza-shape2.png"
        alt="pizza-shape2"
        className="inline sub-heading-art -ml-1 object-contains"
      />
    </div>
  );
};

export default Headline;
