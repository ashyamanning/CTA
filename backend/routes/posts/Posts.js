const posts = require("express").Router();
const { getAllPosts } = require("../../queries/posts/Posts");

const postLikesRouter = require("./NestedPostsRouter/NestedLikes");
posts.use("/likes", postLikesRouter);

const postCommentsRouter = require("./NestedPostsRouter/NestedComments");
posts.use("/comments", postCommentsRouter);

posts.get("/", getAllPosts);

module.exports = posts;
