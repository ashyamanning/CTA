const userPosts = require("express").Router({ mergeParams: true });
const {
  getAllUserPosts,
  createPost,
  deletePost,
  editPost,
} = require("../../../queries/posts/Posts");

userPosts.get("/posts", getAllUserPosts);

userPosts.post("/new", createPost);

userPosts.delete("/:id/posts/:post_id", deletePost);

userPosts.patch("/:id/posts/:post_id", editPost);

module.exports = userPosts;
