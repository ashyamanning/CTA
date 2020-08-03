const db = require("../../db/index");

const getAllHashtags = async (req, res, next) => {
  try {
    let hashtags = await db.any("SELECT * FROM hashtags");
    res.status(200).json({
      status: "Success!",
      message: "Retrieved all hashtags!",
      payload: hashtags,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Could not retrieve hashtags!",
      payload: null,
    });
    next(err);
  }
};

const createHashtag = async (req, res, next) => {
  try {
    let newHashtag = await db.one(
      "INSERT INTO hashtags (post_id, body) VALUES (${post_id}, ${body})",
      req.body
    );
    res.status(200).json({
      status: "Success!",
      message: "New hashtag created!",
      payload: newHashtag,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to create hashtag!",
      payload: null,
    });
    next(err);
  }
};

const editHashtag = async (req, res, next) => {
  try {
    let editedHashtag = await db.one(
      "UPDATE hashtags SET body = $1 WHERE post_id = $2 RETURNING *",
      [req.body, req.params.post_id]
    );
    res.status(200).json({
      status: "Success!",
      message: "Updated hashtag!",
      payload: editedHashtag,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Could not update hashtag!",
      payload: null,
    });
    next(err);
  }
};

const deleteHashtag = async (req, res, next) => {
  try {
    let { id, post_id } = req.params;
    await db.none("DELETE FROM hashtags WHERE id = $1 AND post_id = $2", [
      id,
      post_id,
    ]);
    res.status(200).json({
      status: "Success!",
      message: "Hashtag removed!",
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Could not delete hashtag!",
      payload: null,
    });
    next(err);
  }
};

module.exports = { getAllHashtags, createHashtag, editHashtag, deleteHashtag };
