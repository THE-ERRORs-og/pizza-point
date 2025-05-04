"use client";
import React, { use } from "react";
import { Button } from "@/components/ui/button";

const MainButton = ({ text, className = "", onClick = () => {} }) => {
  return (
    <Button
      type="button"
      className={`btn-primary ${className}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default MainButton;
