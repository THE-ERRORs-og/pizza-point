import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const Layout = ({ children }) => {
  /*bg-cube-grid*/
  return (
    <div className="flex flex-col relative min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
