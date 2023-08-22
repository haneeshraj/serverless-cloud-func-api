const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  addPost,
  deleteAllPosts,
  getPost,
  deletePost,
  editPost,
} = require("../controllers/blogControllers.js");

router.route("/").get(getAllPosts).post(addPost).delete(deleteAllPosts);
router.route("/:id").get(getPost).delete(deletePost).patch(editPost);

module.exports = router;
