const userLikes = require("express").Router({ mergeParams: true });
const { getAllUserLikes } = require("../../../queries/users/Users");


userLikes.get("/:id/likes",  getAllUserLikes);


module.exports = userLikes;
