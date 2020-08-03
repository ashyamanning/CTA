const postComments = require("express").Router({ mergeParams: true });
const { getAllPostComments } = require("../../../queries/posts/Posts");

postComments.get("/", getAllPostComments);

module.exports = postComments;
