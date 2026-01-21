import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import SmallBlogCard from "../components/SmallBlogCard";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <p className="text-center mt-20">Blog not found</p>;
  }

  return (
    <section className="section">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="col-span-2">
          <img
            src="/blog.jpg"
            alt={blog.title}
            className="w-full object-cover rounded-md mb-6"
          />

          <span className="inline-block text-sm bg-[#155efc19] text-gray-600 px-3 py-1 rounded-full mb-4 font-jakarta">
            {blog.tag}
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-3 font-jakarta">
            {blog.title}
          </h1>

          <p className="text-sm text-gray-500 mb-6 font-jakarta">
            By {blog.author} • {blog.date}
          </p>

          <p className="text-gray-700 leading-relaxed font-jakarta">
            {blog.content}
          </p>
        </div>
        <div className="border rounded-md border-[#f2eaea] shadow-md hover:shadow-lg p-6">
          <div className="flex flex-col gap-3">
            <div className="">
              <h3>Recent Posts</h3>
            </div>
            <div className="flex flex-col">
              {blogs
                .filter((b) => b.id !== blog.id)
                .slice(0, 4)
                .map((item) => (
                  <SmallBlogCard
                    key={item.id} {...item}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
