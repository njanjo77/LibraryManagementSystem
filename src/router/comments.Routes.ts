

import { Router } from "express";
import * as commentController from '../controllers/comments.Controllers';
import { isAuthenticated } from "../Middlewares/bearAuth";


const router = Router();

// Define your routes here
router.post('/comments/create', isAuthenticated,commentController.createComment);
router.get('/comments', isAuthenticated,commentController.getAllComments);
router.get('/comments/:id', isAuthenticated,commentController.getCommentById);
router.put('/:id', isAuthenticated,commentController.updateComment);
router.delete('/comments/:id', isAuthenticated,commentController.deleteComment);
export default router;


