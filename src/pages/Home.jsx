import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const webinars = [
    {
      id: 1,
      tag1: "Cost-",
      tag2: "Efficient QA",
      date: "Mar 23, 2024",
      title: "Reducing QA Costs with Automation",
      desc:
        "Learn how automation helps reduce QA costs while improving product quality.",
      image: "/logo.webp",
    },
    {
      id: 2,
      tag1: "Cost-",
      tag2: "Efficient QA",
      date: "Mar 23, 2024",
      title: "Reducing QA Costs with Automation",
      desc:
        "Learn how automation helps reduce QA costs while improving product quality.",
      image: "/logo.webp",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-1 items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-4">
          <h4 className="text-blue-600 font-semibold uppercase tracking-wide">
            Our Webinar
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Grow as a Developer with our <br />
            Training Webinar
          </h2>

          <p className="text-gray-600 text-sm">
            Free live training workshop, Monday to Friday, from the comfort of
            your own
            <br /> home. Let's learn, grow and build together.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <h4 className="text-xl font-semibold text-gray-800">Upcoming</h4>

          <div className="flex gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-blue-600 transition group">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-gray-700 group-hover:text-white"
              />
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-blue-600 transition group">
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-700 group-hover:text-white"
              />
            </button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-wrap gap-6 justify-between">
            {webinars.map((item)=>(
                <HomeCard
                key={item.id}
                tag1={item.tag1}
                tag2={item.tag2}
                date={item.date}
                title={item.title}
                desc={item.desc}
                image={item.image}
                />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
