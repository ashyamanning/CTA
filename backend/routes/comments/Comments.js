const comments = require("express").Router();
const { createComment, editComment, deleteComment } = require("../../queries/comments/Comments");

comments.post("/", createComment);

comments.patch("/:id", editComment);

comments.delete("/:id", deleteComment);

module.exports = comments;
