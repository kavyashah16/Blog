import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = ({ id, tag, title, desc, date }) => {
  return (
    <Link to={`/blog/${id}`} className="block">
      <div className="flex flex-col p-4 gap-3 border border-[#f2eaea] rounded-md shadow-md relative hover:shadow-lg transition-shadow duration-300">
        <img
          src="/blog.jpg"
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 bg-[#155efc19] px-3 py-1 rounded-full font-semibold">
              {tag}
            </span>
            <span className="text-xs text-gray-500">{date}</span>
          </div>

          <h2 className="text-xl text-primary font-semibold flex items-center gap-2">
            {title}
            <MdArrowOutward />
          </h2>

          <p className="text-sm text-gray-500">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
