import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-gray-100 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <img src="image.png" alt="Company logo" className="h-10 w-auto" />

        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-600">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-blue-600">
              Service
            </Link>
          </li>
        </ul>

        <button className="hidden md:flex bg-blue-600 text-white px-4 py-2.5 rounded-md">
          Contact Us
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={() => setOpen(false)}>
                Service
              </Link>
            </li>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
