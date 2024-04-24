import React, { useState } from "react";
import "./writeBlog.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { toast } from "react-toastify";

const WriteBlog = () => {
  const userId = window.localStorage.getItem("userID");

  const [blog, setBlog] = useState({
    title: "",
    subtitle: "",
    author: "",
    content: "",
    userId,
  });

  const navigate = useNavigate();
  const { title, subtitle, author, content } = blog;

  const onChangeValue = (name, value) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleCreate = async () => {
    try {
      const response = await fetch("http://localhost:8000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });

      if (response.ok) {
        console.log("Blog created successfully");
        toast.success("Blog Created");
        navigate("/blogs");
      } else {
        console.error("Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="writeBlog">
      <Navbar />
      <div className="inputform">
        <input
          placeholder="Enter title"
          value={title}
          onChange={(e) => onChangeValue("title", e.target.value)}
        ></input>
        <input
          placeholder="Enter subtitle"
          value={subtitle}
          onChange={(e) => onChangeValue("subtitle", e.target.value)}
        ></input>
        <input
          placeholder="Enter author"
          value={author}
          onChange={(e) => onChangeValue("author", e.target.value)}
        ></input>
        <textarea
          className="content"
          placeholder="Enter content"
          value={content}
          onChange={(e) => onChangeValue("content", e.target.value)}
        ></textarea>
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
};

export default WriteBlog;
