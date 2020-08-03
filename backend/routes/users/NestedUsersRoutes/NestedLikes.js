const userLikes = require("express").Router({ mergeParams: true });
const { getAllUserPostLikes } = require("../../../queries/users/Users");

userLikes.get("/", getAllUserPostLikes);

module.exports = userLikes;
