const Blog = require("../models/blogModel.js");

// @desc    Gets all posts
// @route   GET /api/blogs
// @access  Public

async function getAllPosts(req, res) {
  try {
    const posts = await Blog.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(400);
    console.error(error);
  }
}

// @desc    Adds a post
// @route   POST /api/blogs
// @access  Public

async function addPost(req, res) {
  try {
    const { title, author, date, content } = req.body;

    const post = new Blog({ title, author, date, content });

    const createdPost = await post.save();

    res.status(201).json({ createdPost, created: true });
  } catch (error) {
    res.status(400);
    console.error(error);
  }
}

// @desc    Deletes all posts
// @route   DELETE /api/blogs
// @access  Public

async function deleteAllPosts(req, res) {
  try {
    await Blog.deleteMany({});

    res.status(200).json({ message: "All posts are successfully deleted!" });
  } catch (error) {
    res.status(400);
    console.error(error);
  }
}

// @desc    Gets a post by :id
// @route   GET /api/blogs/:id
// @access  Public

async function getPost(req, res) {
  try {
    const post = await Blog.findById(req.params.id);

    res.status(200).json(post);
  } catch (error) {
    res.status(400);
    console.error(error);
  }
}

// @desc    Deletes a post by :id
// @route   DELETE /api/blogs/:id
// @access  Public

async function deletePost(req, res) {
  try {
    const post = await Blog.findById(req.params.id);

    if (post) {
      await Blog.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: `Post with id ${req.params.id} is successfully deleted!`,
      });
    } else {
      res.status(404).json({
        message: `Post with id ${req.params.id} not found!`,
      });
    }
  } catch (error) {
    res.status(400);
    console.error(error);
  }
}

// @desc    Edits a post by :id
// @route   PATCH /api/blogs/:id
// @access  Public

async function editPost(req, res) {
  try {
    const post = await Blog.findById(req.params.id);
    if (post) {
      const test = await Blog.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(test);
    } else {
      res.status(404).json({
        message: `Post with id ${req.params.id} not found!`,
      });
    }
  } catch (error) {
    res.status(400);
    console.error(error);
  }
}

module.exports = {
  getAllPosts,
  addPost,
  deleteAllPosts,
  getPost,
  deletePost,
  editPost,
};
