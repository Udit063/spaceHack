import React, { useEffect, useState } from "react";
import "./blog.css";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { toast } from "react-toastify";

const Blog = () => {
  const { id } = useParams(); // Corrected the use of useParams
  const [blog, setBlog] = useState();
  const navigate = useNavigate();

  const userID = window.localStorage.getItem("userID");

  useEffect(() => {
    const backEndcall = async () => {
      try {
        const response = await fetch(`http://localhost:8000/post/${id}`);
        const data = await response.json();
        console.log(data);
        setBlog(data);
      } catch (err) {
        console.log(err);
      }
    };
    backEndcall();
  }, [id]); // Added id as a dependency to the useEffect dependency array

  if (!blog) {
    // Add loading state or error handling here
    return <div>Loading...</div>;
  }

  const deleteBlog = async () => {
    try {
      const response = await fetch(`http://localhost:8000/post/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Blog deleted successfully");
        toast.success("Blog Deleted");
        navigate("/blogs");
      } else {
        console.log(response);
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="blogPage">
        <div className="title">{blog.title}</div>
        <div className="author">{blog.author}</div>
        <div className="subtitle">{blog.subtitle}</div>
        <div className="content">{blog.content}</div>

        {userID === blog.userId && (
          <button className="deleteBtn" onClick={deleteBlog}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
