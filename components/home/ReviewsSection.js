import React from "react";

import Headline from "./Headline";
import TestimonialSwiper from "../common/TestimonialSwiper";

const ReviewsSection = () => {
  return (
    <div className="">
      <Headline leftText="Our" specialText="Reviews" right />
      <TestimonialSwiper />
    </div>
  );
};

export default ReviewsSection;
