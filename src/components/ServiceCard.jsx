import React from "react";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <div className="p-6 flex flex-col gap-5 bg-card rounded-lg">
      <img src={img} alt="Icon" className="w-16 h-8" />

      <div className="flex flex-col gap-5 flex-1">
        <h1 className="text-md tracking-wide font-bold text-primary md:text-lg">{title}</h1>

        <p className="text-sm text-gray-600">{desc}</p>

        <button className="text-white bg-primary rounded-md md:px-3 px-1 py-2 w-[40%]">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
