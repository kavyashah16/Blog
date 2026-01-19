import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 px-6 md:px-16 py-14">
      <div className="md:col-span-3 flex flex-col justify-center text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-wide">
          Search and find <br />
          your best{" "}
          <span className="underline decoration-blue-600">courses</span> <br />
          with easy way
        </h1>

        <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          eligendi dolor praesentium ex odit qui quos. Minus asperiores
          similique rem autem libero, vero dolores maiores cumque saepe, ex
          porro perspiciatis?
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="text-white bg-blue-600 hover:bg-blue-700 transition rounded-md px-7 py-2.5">
            Join us now!
          </button>
          <span className="cursor-pointer underline underline-offset-4 hover:text-blue-600 transition">
            See all plans
          </span>
        </div>
      </div>

      <div className="md:col-span-3 flex justify-center items-center">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <img
            src="homeimage.png"
            alt="Home Page"
            className="w-full object-contain"
          />
          <img
            src="star.png"
            className="absolute bottom-[8%] left-[5%] w-16 sm:w-20 md:w-24"
          />

          <img
            src="star.png"
            className="absolute top-[6%] right-[6%] w-16 sm:w-20 md:w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
