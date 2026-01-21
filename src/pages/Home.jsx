import React from "react";
import BlogCard from "../components/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => {
  const blogs = [
    {
      id: 1,
      img: "b1.svg",
      title: "Product Designer",
      desc: "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
    },
    {
      id: 2,
      img: "b2.svg",
      title: "Product Designer",
      desc: "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
    },
    {
      id: 3,
      img: "b3.svg",
      title: "Product Designer",
      desc: "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
    },
    {
      id: 4,
      img: "b4.svg",
      title: "Product Designer",
      desc: "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
    },
    {
      id: 5,
      img: "b5.svg",
      title: "Product Designer",
      desc: "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
    },
    {
      id: 6,
      img: "b6.svg",
      title: "Product Designer",
      desc: "Learn various UI UX Design materials including UX Research, UI Design, UX Writing, and Product Design for 4.5 months with professionals  product designer practitioners.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 container">
          <div className="md:col-span-3 flex flex-col justify-center text-center md:text-left gap-6">
            <h1>
              Search and find your best{" "}
              <span className="underline decoration-button">courses</span>
              <span> with easy way</span>
            </h1>

            <p className="mx-auto md:mx-0 max-w-lg hidden sm:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              eligendi dolor praesentium ex odit qui quos. Minus asperiores
              similique rem autem libero, vero dolores maiores cumque saepe, ex
              porro perspiciatis?
            </p>

            <div className="flex flex-row items-center justify-center md:justify-start gap-4">
              <button className="text-white bg-button hover:bg-blue-700 transition rounded-md px-4 py-1 md:px-7 md:py-2.5 font-jakarta">
                Join us now!
              </button>
              <span className="cursor-pointer underline underline-offset-4 hover:text-button transition font-jakarta">
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
                alt=""
                className="absolute bottom-[8%] left-[5%] w-16 sm:w-20 md:w-24 z-10"
              />

              <img
                src="star.png"
                alt=""
                className="absolute top-[6%] right-[6%] w-16 sm:w-20 md:w-24 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F8FE] section">
        <div className="flex flex-col items-center  py-14 px-6 text-center gap-15 container">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2>
              <span className="md:block">Collaborate with 100+</span>
              leading universities and companies
            </h2>

            <p className="max-w-2xl mx-auto">
              WOC has contributed to students so that they can work in their
              dream company. We will continue to stick to our commitment to
              create an advanced generation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-16 items-center">
            <img src="c1.png" className="w-24 md:w-28 mx-auto" />
            <img src="c2.png" className="w-24 md:w-28 mx-auto" />
            <img src="c3.png" className="w-24 md:w-28 mx-auto" />
            <img src="c4.png" className="w-24 md:w-28 mx-auto" />
            <img src="c5.png" className="w-24 md:w-28 mx-auto" />

            <img src="c6.png" className="w-24 md:w-28 mx-auto" />
            <img src="c7.png" className="w-24 md:w-28 mx-auto" />
            <img src="c8.png" className="w-24 md:w-28 mx-auto" />
            <img src="c9.png" className="w-24 md:w-28 mx-auto" />
            <img src="c10.png" className="w-24 md:w-28 mx-auto" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-center container">
          <div className="relative flex justify-center">
            <img
              src="homeimg2.png"
              alt="Home Image"
              className="w-full max-w-md shadow-lg rounded-md"
            />
            <img
              src="star.png"
              alt="Star"
              className="absolute top-6 left-10 w-8 md:w-12"
            />
          </div>

          <div className="flex flex-col gap-10 items-center md:items-start text-center md:text-left">
            <div className="flex flex-col gap-6">
              <h2>
                We are committed to helping you in the process of achieving your
                dreams
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh proin proin eget
                neque. Tortor tempus massa dui viverra in justo gravida. At
                justo eget volutpat leo fermentum scelerisque cursus sit donec.
                Nisl id velit faucibus vel. Amet cras diam non habitasse a arcu.
                Urna nulla felis diam nisl et.
              </p>
            </div>

            <button className="bg-button text-white px-6 py-2.5 rounded-md shadow-lg font-jakarta">
              See detail
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="flex flex-col gap-15 justify-center items-center container">
          <h2>Our best courses for you</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl w-full">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                img={blog.img}
                title={blog.title}
                desc={blog.desc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto items-start container">
          <div className="col-span-1">
            <div className="flex flex-col gap-6">
              <img src="/comment.svg" className="w-12" />
              <h2 className="">what they say about WOC</h2>
              <p>
                More than 3000 users have been helped by World Online Course.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <TestimonialSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
