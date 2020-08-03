const posts = require("express").Router();
const { getAllPosts } = require("../../queries/posts/Posts");

const postLikesRouter = require("./NestedPostsRouter/NestedPosts");
posts.use("/", postLikesRouter);

const postCommentsRouter = require("./NestedPostsRouter/NestedComments");
posts.use("/", postCommentsRouter);

posts.get("/", getAllPosts);

module.exports = posts;
