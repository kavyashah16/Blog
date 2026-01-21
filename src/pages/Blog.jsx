import React from "react";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blogs";

const Blog = () => {
  return (
    <section className="my-8 px-6 md:px-16 lg:px-32">
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-primary font-semibold text-center mb-10">
        Resources and insights
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
