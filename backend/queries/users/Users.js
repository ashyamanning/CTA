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
      "SELECT * FROM users WHERE username = $1",
      req.params.username
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
      "INSERT INTO users (id, firstName, lastName, userName, email) VALUES (${id}, ${firstName}, ${lastName}, ${userName}, ${email}) RETURNING *",
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

// const editPost = async (req, res, next) => {
//   try {
//     let editedPost = await db.one(
//       "UPDATE posts SET caption = $1 WHERE post_id = $2 RETURNING *",
//       [req.body, req.params.post_id]
//     );
//     res.status(200).json({
//       status: "Success!",
//       message: "Updated post!",
//       payload: editedPost,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: err,
//       message: "Unable to edit post!",
//       payload: null,
//     });
//     next(err);
//   }
// };

const createComment = async (req, res, next) => {
  try {
    let newComment = await db.one(
      "INSERT INTO comments (commentor_id, post_id, body) VALUES (${commentor_id}, ${post_id}, ${body})",
      req.body
    );
    res.status(200).json({
      status: "Success!",
      message: "Created a new comment!",
      payload: newComment,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to create comment!",
      payload: null,
    });
    next(err);
  }
};

// const editComment = async (req, res, next) => {
//   try {
//     let editedComment = await db.one(
//       "UPDATE comments SET body = $1 WHERE commentor_id = $2 RETURNING *",
//       [req.body, req.params.id]
//     );
//     res.status(200).json({
//       status: "Success!",
//       message: "Updated cooment!",
//       payload: editedComment,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: err,
//       message: "Failed to update comment!",
//       payload: null,
//     });
//     next(err);
//   }
// };

const deleteComment = async (req, res, next) => {
  try {
    await db.none("DELETE FROM comments WHERE id = $1 AND commentor_id = $2", [
      req.params.id,
      req.params.commentor_id,
    ]);
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to delete comment!",
      payload: null,
    });
    next(err);
  }
};

const getAllUserPostLikes = async (req, res, next) => {
  try {
    let userPostLikes = await db.any(
      "SELECT * FROM likes WHERE post_id = $1",
      req.params.post_id
    );
    res.status(200).json({
      status: "Success!",
      message: "Retrieved all likes of post!",
      payload: userPostLikes,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to retrieve all post likes!",
      payload: null,
    });
    next(err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  // editPost,
  createComment,
  // editComment,
  deleteComment,
  getAllUserPostLikes,
};
