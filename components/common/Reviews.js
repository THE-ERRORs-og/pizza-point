import React from "react";

const Reviews = ({ rating, height, width }) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[...Array(5)].map((_, index) => {
        let fillValue = rating - index;
        fillValue = fillValue >= 1 ? 1 : fillValue > 0 ? fillValue : 0;
        return (
          <Star
            key={index}
            fillPercentage={fillValue}
            width={width}
            height={height}
          />
        );
      })}
    </div>
  );
};

const Star = ({ fillPercentage, width, height }) => {
  return (
    <svg
      width={width || "37"}
      height={height || "35"}
      viewBox="0 0 37 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="starFillGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset={`${fillPercentage * 100}%`} stopColor="#FFC24A" />
          <stop offset={`${fillPercentage * 100}%`} stopColor="gray" />
        </linearGradient>
      </defs>
      <path
        d="M17.6348 1.65678C17.9872 0.942693 19.0055 0.942693 19.3579 1.65678L23.9201 10.9008C24.0601 11.1843 24.3306 11.3809 24.6435 11.4264L34.8449 12.9087C35.6329 13.0232 35.9476 13.9916 35.3774 14.5475L27.9956 21.7429C27.7691 21.9637 27.6658 22.2817 27.7193 22.5933L29.4619 32.7535C29.5965 33.5383 28.7727 34.1369 28.0678 33.7663L18.9435 28.9693C18.6636 28.8222 18.3292 28.8222 18.0493 28.9693L8.92493 33.7663C8.22008 34.1369 7.39628 33.5383 7.53089 32.7535L9.27349 22.5933C9.32695 22.2817 9.22362 21.9637 8.99718 21.7429L1.61541 14.5475C1.04518 13.9916 1.35984 13.0232 2.14788 12.9087L12.3492 11.4264C12.6622 11.3809 12.9327 11.1843 13.0726 10.9008L17.6348 1.65678Z"
        fill="url(#starFillGradient)"
        // stroke="#FFC24A"
        // strokeWidth="1.74242"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Reviews;
