import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="flex items-center justify-between px-6 py-4 bg-white">
            <div className="flex items-center">
                <img src="image.png" alt="Company logo" className="h-10 w-auto"/>
            </div>

            <ul className="flex space-x-10 text-gray-700 font-medium">
                <li>
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
                </li>
                <li>
                    <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                </li>
            </ul>

            <button className="flex bg-blue-600 text-white p-2.5 rounded-md">Contact Us</button>

        </nav>
    )
};

export default Navbar