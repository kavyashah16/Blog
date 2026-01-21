import React from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <Link>
      <div className="p-6 flex flex-col gap-5 bg-card rounded-lg shadow-md hover:shadow-lg border border-card">
        <div className="flex flex-row gap-2 items-center">
          <img src={img} alt="Icon" className="h-8" />
          <h3 className="">{title}</h3>
        </div>
        <div className="flex flex-col gap-5 flex-1">
          <p>{desc}</p>

          <span className="mt-auto text-primary text-sm font-medium font-jakarta text-right flex items-center gap-2">
            Read more <MdArrowOutward />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
