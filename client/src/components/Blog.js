import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";

const Blog = ({ title, content, subtitle, author, id }) => {
  let truncatedContent;
  if (content) {
    truncatedContent =
      content.length > 100 ? `${content.slice(0, 400)}...` : content;
  }

  return (
    <div className="blogbox">
      <div className="blog-title">{title}</div>
      <div className="blog-author">{author}</div>
      <div className="blog-subtitle">{subtitle}</div>
      <div className="blog-content">{truncatedContent}</div>
      <Link to={`/blogs/${id}`}>
        <button>Show</button>
      </Link>
    </div>
  );
};

export default Blog;
