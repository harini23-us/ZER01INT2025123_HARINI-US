import express from 'express';
import { createBlog, getBlogs, updateBlog, deleteBlog } from '../controllers/blogController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticate, createBlog);
router.get('/', getBlogs);
router.put('/:id', authenticate, updateBlog);
router.delete('/:id', authenticate, deleteBlog);

export default router;