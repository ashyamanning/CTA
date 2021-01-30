const db = require("../../db/index");

const getAllPosts = async (req, res, next) => {
  try {
    let posts = await db.any(`
    SELECT 
      users.id AS uid,
      posts.id,
      caption,
      video_url,
      created_at_timestamp,
      display_name,
      username 
    FROM posts 
    INNER JOIN users 
    ON users.id = posts.poster_id
    ORDER BY created_at_timestamp DESC`, req.body);
    res.status(200).json({
      status: "Success!",
      message: "Retrieved all posts!",
      payload: posts,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Unable to retrieve posts!",
      payload: null,
    });
    next(err);
  }
};

const getAllPostLikes = async (req, res, next) => {
  try {
    // let postLikes = await db.any(
    //   "SELECT * FROM likes INNER JOIN posts ON posts.id = likes.post_id INNER JOIN users ON users.id = posts.poster_id WHERE poster_id = $1",
    //   req.params.poster_id
    // );
    let postLikes = await db.any(
      "SELECT COUNT (*) FROM likes INNER JOIN posts ON posts.id = likes.post_id INNER JOIN users ON users.id = posts.poster_id WHERE poster_id = $1", 
      req.params.id
    );
    res.status(200).json({
      status: "Success!",
      message: "Retrieved all likes of user posts!",
      payload: postLikes,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Unable to retrieve all post likes for user!",
    });
    next(err);
  }
};

const getAllPostComments = async (req, res, next) => {
  try {
    let postComments = await db.any(
      "SELECT * FROM comments WHERE post_id = $1 RETURNING *",
      req.params.post_id
    );
    res.status(200).json({
      status: "Success!",
      message: "Retrieved all post comments!",
      payload: postComments,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to retrieve post comments!",
      payload: null,
    });
    next(err);
  }
};

const createPost = async (req, res, next) => {
  try {
    console.log("create post query");
    let { poster_id, video_url, caption } = req.body;
    let newPost = await db.one(
      "INSERT INTO posts (poster_id, video_url, caption) VALUES ($1, $2, $3) RETURNING *",
      [ poster_id, video_url, caption ]
    );
    res.status(200).json({
      status: "Success!",
      message: "New post created!",
      payload: newPost,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: err,
      message: "Failed to create post!",
      payload: null,
    });
    next(err);
  }
};

const editPost = async (req, res, next) => {
  try {
    let editedPost = await db.one(
      "UPDATE posts SET caption = $1 WHERE post_id = $2 RETURNING *",
      [req.body, req.params.post_id]
    );
    res.status(200).json({
      status: "Success!",
      message: "Updated post!",
      payload: editedPost,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Unable to edit post!",
      payload: null,
    });
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    await db.none("DELETE FROM posts WHERE id = $1 AND poster_id = $2", [
      req.params.id,
      req.params.poster_id,
    ]);
    res.status(200).json({
      status: "Success!",
      message: "Post deleted!",
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Unable to delete post!",
      payload: null,
    });
    next(err);
  }
};

const getAllUserPosts = async (req, res, next) => {
  try {
    let userPosts = await db.any(
      "SELECT * FROM posts INNER JOIN users ON posts.poster_id = users.id WHERE poster_id = $1",
      req.params.poster_id
    );
    res.status(200).json({
      status: "Success!",
      message: "Retrieved all user posts!",
      payload: userPosts,
    });
  } catch (err) {
    res.status(500).json({
      status: err,
      message: "Failed to retrieve user posts!",
      payload: null,
    });
    next(err);
  }
};

module.exports = { getAllPosts, getAllPostLikes, getAllPostComments, createPost, editPost, deletePost, getAllUserPosts };
