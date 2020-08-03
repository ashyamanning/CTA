const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

const postsRouter = require("./routes/posts/Posts");
const usersRouter = require("./routes/users/Users");
// const commentsRouter = require("./routes/comments/Comments");
const likesRouter = require("./routes/likes/Likes");
const hashtagsRouter = require("./routes/hashtags/Hashtags");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);
// app.use("/api/comments", commentsRouter);
app.use("/api/likes", likesRouter);
app.use("/api/hashtags", hashtagsRouter);

app.use((err, res, req, next) => {
  console.log(err);
  if (err.status) {
    res.status(err.status).json(err);
  } else {
    res.status(500).json(err);
  }
});

app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});
