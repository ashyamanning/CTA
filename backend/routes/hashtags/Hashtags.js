const hashtags = require("express").Router();
const {
  getAllHashtags,
  createHashtag,
  editHashtag,
  deleteHashtag,
} = require("../../queries/hashtags/Hashtags");

hashtags.get("/", getAllHashtags);

hashtags.post("/", createHashtag);

hashtags.patch("/:id", editHashtag);

hashtags.delete("/:id", deleteHashtag);

module.exports = hashtags;
