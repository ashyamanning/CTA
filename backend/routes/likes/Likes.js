const likes = require("express").Router();
const { createLike, deleteLike } = require("../../queries/likes/Likes");

likes.post("/", createLike);

likes.delete("/:id", deleteLike);

module.exports = likes;
