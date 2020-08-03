const db = require("../../db/index");

const createLike = async (req, res, next) => {
  try {
    await db.none(
      "INSERT INTO likes (liker_id, post_id) VALUES (${liker_id}, ${post_id})",
      req.body
    );
    res.status(200).json({
      status: "Success!",
      message: "New like created!",
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Could not create like!",
      payload: null,
    });
    next(err);
  }
};

const deleteLike = async (req, res, next) => {
  try {
    await db.none("DELETE FROM likes WHERE id = $1", req.params.id);
    res.status(200).json({
      status: "Success!",
      message: "Like removed!",
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Could not create like!",
      payload: null,
    });
    next(err);
  }
};

module.exports = { createLike, deleteLike };
