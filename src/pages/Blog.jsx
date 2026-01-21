import React from "react";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    <section className="section">
      <div className="container text-center max-w-4xl">
        <div className="flex flex-col mb-8 gap-3">
          <h1>
            Resources and insights
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            laudantium similique cumque unde sunt quidem eius cum ipsa non
            ratione aperiam veniam, atque neque molestias fugiat beatae!
            Laudantium, pariatur sed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
