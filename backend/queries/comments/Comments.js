// const db = require("../../db/index");

// const getAllComments = async (req, res, next) => {
//   try {
//     let comments = await db.any("SELECT * FROM comments", req.body);
//     res.status(200).json({
//       status: "Success!",
//       message: "Retreived all comments!",
//       payload: comments,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: err,
//       message: "Could not retrieve all posts!",
//       payload: null,
//     });
//   }
// };

// module.exports = { getAllComments };
