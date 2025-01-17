import Blog from '../models/Blog.js';
import User from '../models/User.js';

export const createBlog = async (req, res) => {
  try {
    const { content } = req.body;
    const blog = await Blog.create({
      userId: req.user.id,
      content,
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error: error.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: [{
        model: User,
        attributes: ['id', 'name', 'username']
      }],
      order: [['createdAt', 'DESC']]
    });
    res.json(blogs);
  } catch (error) {
    console.error('Error in getBlogs:', error);
    res.status(500).json({ message: 'Error fetching blogs', error: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    
    const blog = await Blog.findOne({
      where: { id, userId: req.user.id }
    });

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found or unauthorized' });
    }

    await blog.update({ content });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog', error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne({
      where: { id, userId: req.user.id }
    });

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found or unauthorized' });
    }

    await blog.destroy();
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error: error.message });
  }
};