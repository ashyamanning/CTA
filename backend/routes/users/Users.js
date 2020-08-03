const users = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
} = require("../../queries/users/Users");
const { checkFirebaseToken } = require("../../middleware/auth");

const usersPostsRouter = require("./NestedUsersRoutes/NestedPosts");
users.use("/", usersPostsRouter);

const usersCommentsRouter = require("./NestedUsersRoutes/NestedComments");
users.use("/", usersCommentsRouter);

const usersLikesRouter = require("./NestedUsersRoutes/NestedLikes");
users.use("/", usersLikesRouter);

users.get("/", checkFirebaseToken, getUsers);

users.get("/:username", checkFirebaseToken, getUser);

users.post("/", createUser);

users.delete("/:id", deleteUser);

module.exports = users;