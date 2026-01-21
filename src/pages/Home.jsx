import React from "react";
import BlogCard from "../components/ServiceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
  const testimonials = [
    {
      name: "Aarav Patel",
      role: "UI Designer",
      img: "/user1.jpg",
      comment:
        "WOC helped me improve my design skills and land my first freelance project.",
    },
    {
      name: "Neha Sharma",
      role: "Frontend Developer",
      img: "/user2.jpg",
      comment:
        "The courses are well structured and easy to follow. Highly recommended!",
    },
  ];

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-6 gap-8 px-6 md:px-16 py-14">
        <div className="md:col-span-3 flex flex-col justify-center text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-wide text-primary">
            Search and find <br />
            your best{" "}
            <span className="underline decoration-blue-600">courses</span>
            <br />
            with easy way
          </h1>

          <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            eligendi dolor praesentium ex odit qui quos. Minus asperiores
            similique rem autem libero, vero dolores maiores cumque saepe, ex
            porro perspiciatis?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
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
      </section>

      <section className="my-14">
        <div className="flex flex-col items-center bg-[#F5F8FE] py-14 px-6 text-center gap-15">
          <div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl text-primary leading-tight font-bold max-w-4xl">
              <span className="md:block">Collaborate with 100+</span>
              leading universities and companies
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
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

      <section className="my-20 px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-center">
          <div className="relative flex justify-center">
            <img
              src="homeimg2.png"
              alt="Home Image"
              className="w-full max-w-md"
            />
            <img
              src="star.png"
              alt="Star"
              className="absolute top-6 left-10 w-8 md:w-12"
            />
          </div>

          <div className="flex flex-col gap-10 items-start">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl sm:text-3xl md:text-5xl text-primary font-semibold leading-tight">
                We are committed to helping you in the process of achieving your
                dreams
              </h1>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Nibh proin proin eget
                neque. Tortor tempus massa dui viverra in justo gravida. At
                justo eget volutpat leo fermentum scelerisque cursus sit donec.
                Nisl id velit faucibus vel. Amet cras diam non habitasse a arcu.
                Urna nulla felis diam nisl et.
              </p>
            </div>

            <button className="bg-button text-white px-6 py-2.5 rounded-md hover:opacity-90 transition">
              See detail
            </button>
          </div>
        </div>
      </section>

      <section className="mt-52 mb-10 px-6 md:px-16 lg:px-32">
        <div className="flex flex-col gap-20 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-primary font-semibold leading-tight text-center">
            Our best courses for you
          </h1>

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

      <section className="my-20 px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-10 max-w-6xl mx-auto items-start">
          <div className="flex flex-col gap-6">
            <img src="/comment.svg" className="w-12" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              What they say <br /> about WOC
            </h2>
            <p className="text-gray-500 text-sm">
              More than 3000 users have been helped by World Online Course.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
