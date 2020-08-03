const postLikes = require("express").Router({ mergeParams: true });
const { getAllPostLikes } = require("../../../queries/posts/Posts");

postLikes.get("/", getAllPostLikes);

module.exports = postLikes;
