const userComments = require("express").Router({ mergeParams: true });
const {
  createComment,
  // editComment,
  deleteComment,
} = require("../../../queries/users/Users");

userComments.post("/:id/comments", createComment);

// userComments.patch("/:id/comments/:comment_id", editComment);

userComments.delete("/:id/comments/:comment_id", deleteComment);

module.exports = userComments;
