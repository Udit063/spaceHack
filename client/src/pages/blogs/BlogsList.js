import React, { useEffect, useState } from "react";
import "./bloglist.css";
import Blog from "../../components/Blog";
import Navbar from "../../components/Navbar";

const BlogsList = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const backEndcall = async () => {
      try {
        const response = await fetch("http://localhost:8000/post");
        const data = await response.json(); // await the resolution of the promise
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    backEndcall();
  }, []);

  return (
    <div className="blogList">
      <Navbar />
      {blogs &&
        blogs.map((item) => (
          <Blog
            key={item._id}
            id={item._id}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            content={item.content}
            author={item.author}
          />
        ))}
    </div>
  );
};

export default BlogsList;
