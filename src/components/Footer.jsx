import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start md:items-center">

        <div className="flex justify-center md:justify-start">
          <img src="image.png" className="h-8" alt="Logo" />
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-white">

          <div className="flex flex-col">
            <span>Technology Inc. 90B</span>
            <span>Wherever Street</span>
            <span>99122 Indonesia</span>
          </div>

          <div className="flex flex-col">
            <span>+1 234 778 991</span>
            <span>hello@woc.com</span>
          </div>

          <div className="flex flex-col gap-1">
            <span>FAQ</span>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <span>Command Center</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
