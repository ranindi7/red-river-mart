import express, { Router } from "express";
import * as commentController from "../controllers/commentController";
import { requireAuth } from "@clerk/express";
import { findOrCreateUser } from "../../middleware/findOrCreateUser";
import { validateRequest } from "../../middleware/validate";
import {
  createCommentSchema,
  updateCommentSchema,
  deleteCommentSchema,
  getCommentsByForumIdSchema,
  
} from "../validations/commentsValidation";

const router: Router = express.Router();

router.get(
  "/forum/:forumId",
  requireAuth(),
  findOrCreateUser,
  validateRequest(getCommentsByForumIdSchema),
  commentController.getCommentsByForumId
);

router.post(
  "/",
  requireAuth(),
  findOrCreateUser,
  validateRequest(createCommentSchema),
  commentController.createComment
);

router.put(
  "/:commentId",
  requireAuth(),
  findOrCreateUser,
  validateRequest(updateCommentSchema),
  commentController.updateComment
);

router.delete(
  "/:commentId",
  requireAuth(),
  findOrCreateUser,
  validateRequest(deleteCommentSchema),
  commentController.deleteComment
);

export default router;
