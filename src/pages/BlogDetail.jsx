import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <p className="text-center mt-20">Blog not found</p>;
  }

  return (
    <section className="my-16 px-6 md:px-16 lg:px-32 max-w-4xl mx-auto">
      <img
        src="/blog.jpg"
        alt={blog.title}
        className="w-full h-72 object-cover rounded-md mb-6"
      />

      <span className="inline-block text-sm bg-[#155efc19] text-gray-600 px-3 py-1 rounded-full mb-4">
        {blog.tag}
      </span>

      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
        {blog.title}
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        By {blog.author} • {blog.date}
      </p>

      <p className="text-gray-700 leading-relaxed">{blog.content}</p>
    </section>
  );
};

export default BlogDetail;
