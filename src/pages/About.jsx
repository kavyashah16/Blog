import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-14">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary leading-tight">
          Empowering learners to build
          <br /> careers they love
        </h1>
        <p className="mt-5 text-gray-600 text-sm sm:text-base">
          We help students and professionals gain real-world skills through
          curated courses, expert guidance, and practical learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <img
            src="homeimg2.png"
            alt="About us"
            className="w-full max-w-md mx-auto rounded-md"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
            Who we are
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We are a learning-focused platform dedicated to helping students
            and professionals upskill with industry-relevant knowledge.
            Our courses are designed by experts and tailored for real-world
            applications.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Whether you're starting your career or upgrading your skills,
            we provide the right tools and mentorship to support your journey.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="p-6 border border-gray-200 rounded-md">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Our Mission
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To make quality education accessible, practical, and impactful
            for learners across the globe.
          </p>
        </div>

        <div className="p-6 border border-gray-200 rounded-md">
          <h3 className="text-xl font-semibold text-primary mb-3">
            Our Vision
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To become a trusted learning partner that bridges the gap between
            education and industry.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-20">
        <div>
          <h3 className="text-3xl font-bold text-primary">100+</h3>
          <p className="text-sm text-gray-500">Courses</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">50K+</h3>
          <p className="text-sm text-gray-500">Students</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">200+</h3>
          <p className="text-sm text-gray-500">Mentors</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-primary">95%</h3>
          <p className="text-sm text-gray-500">Success Rate</p>
        </div>
      </div>

      <div className="bg-[#F5F8FE] rounded-md py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
          Start learning with us today
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Join thousands of learners building their future with us.
        </p>
        <Link to="/service" className="bg-[#1B1AFF] text-white px-6 py-2.5 rounded-md hover:opacity-90 transition">
          Explore Courses
        </Link >
      </div>
    </section>
  );
};

export default About;
