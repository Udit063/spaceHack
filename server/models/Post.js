const mongoose = require("mongoose");
const User = require("./User");

const postSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  author: String,
  userId: String,
  content: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
