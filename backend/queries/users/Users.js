const db = require("../../db/index");

const getUsers = async (req, res, next) => {
  try {
    let users = await db.any("SELECT * FROM users");
    res.status(200).json({
      status: "Success!",
      message: "Retrieved all users!",
      payload: users,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to retrieve all users!",
      paylaod: null,
    });
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    let user = await db.one(
      "SELECT * FROM users WHERE id = $1",
      req.params.id
    );
    res.status(200).json({
      status: "Success!",
      message: "Retrieved single user!",
      payload: user,
    });
  } catch (err) {
    res.status(404).json({
      status: err,
      message: "User not found!",
      payload: null,
    });
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    let newUser = await db.one(
      "INSERT INTO users (id, firstName, lastName, userName, bio, profile_pic_url) VALUES (${id}, ${firstName}, ${lastName}, ${userName}, ${bio}, ${profile_pic_url}) RETURNING *",
      req.body
    );
    res.status(200).json({
      status: "Success!",
      message: "New user created!",
      payload: newUser,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "User not created!",
      payload: null,
    });
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await db.none("DELETE FROM users WHERE id = $1", req.params.id);
    res.status(200).json({
      status: "Success!",
      message: "User was terminated!",
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to delete user!",
      payload: null,
    });
    next(err);
  }
};


const getAllUserLikes = async (req, res, next) => {
  try {
    let userLikes = await db.any("SELECT * FROM likes INNER JOIN users ON likes.liker_id = users.id WHERE users.id = $1", req.params.id);
    res.status(200).json({
      status: "Success!",
      message: "Retrieved all user likes!",
      payload: userLikes
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to retrieve user likes!",
      payload: null
    });
    next(err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  getAllUserLikes
};
