const userPosts = require("express").Router({ mergeParams: true });
const {
  getAllUserPosts,
  createPost,
  deletePost,
  editPost,
} = require("../../../queries/posts/Posts");

userPosts.get("/:id/posts", getAllUserPosts);

userPosts.post("/:id/posts", createPost);

userPosts.delete("/:id/posts/:post_id", deletePost);

userPosts.patch("/:id/posts/:post_id", editPost);

module.exports = userPosts;
