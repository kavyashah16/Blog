import React from "react";

const HomeCard = ({
    tag1,
    tag2,
    date,
    title,
    desc,
    image,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm w-full max-w-lg">
      <div className="flex items-center justify-between h-20 p-4 border border-green-500 rounded-t-lg">
        <h2 className="text-lg font-semibold leading-tight text-gray-900">
          {tag1}
          <br />
          {tag2}
        </h2>

        <img src={image} alt="Webinar logo" className="h-10 w-auto" />
      </div>

      <div className="p-4 space-y-3">
        <span className="text-sm text-gray-500">{date}</span>

        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-3">
          {desc}
        </p>

        <button className="mt-2 inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Register
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
