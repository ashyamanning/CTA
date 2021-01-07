const users = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
} = require("../../queries/users/Users");
const { checkFirebaseToken } = require("../../middleware/auth");

const usersPostsRouter = require("./NestedUsersRoutes/NestedPosts");
users.use("/:id/posts", usersPostsRouter);

const usersLikesRouter = require("./NestedUsersRoutes/NestedLikes");
users.use("/:id/likes", usersLikesRouter);

users.get("/", checkFirebaseToken, getUsers);

users.get("/:id", checkFirebaseToken, getUser);

users.post("/", createUser);

users.delete("/:id", deleteUser);

module.exports = users;
