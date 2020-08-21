const db = require("../../db/index");

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

const editComment = async (req, res, next) => {
  try {
    let updatedComment = await db.one(
      "UPDATE comments SET body = $1 WHERE commentor_id = $2 RETURNING *",
      [req.body, req.params.id]
    );
    res.status(200).json({
      status: "Success!",
      message: "Updated comment!",
      payload: updatedComment,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to update comment!",
      payload: null,
    });
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
    try {
      await db.none("DELETE FROM comments WHERE id = $1", [
        req.params.id,
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

module.exports = { createComment, editComment, deleteComment };
