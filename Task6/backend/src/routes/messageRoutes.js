import express from 'express';
import { sendMessage, getMessages } from '../controllers/messageController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticate, sendMessage);
router.get('/', authenticate, getMessages);

export default router;