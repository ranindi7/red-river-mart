import express, { Router } from "express";
import { validateRequest } from "../../middleware/validate";
import {
  getForumByIdSchema,
  createForumSchema,
  updateForumSchema,
  deleteForumSchema
} from "../validations/forumValidation";
import * as forumController from "../controllers/forumController";
import { findOrCreateUser } from "../../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";

const router: Router = express.Router();

router.get("/",
  requireAuth(),
  findOrCreateUser,
  forumController.getAllForums);

router.get(
  "/:id",
  requireAuth(),
  findOrCreateUser,
  validateRequest(getForumByIdSchema),
  forumController.getForumById
);

router.post(
  "/",
  requireAuth(),
  findOrCreateUser,
  validateRequest(createForumSchema),
  forumController.createForum
);

router.put(
  "/:id",
  requireAuth(),
  findOrCreateUser,
  validateRequest(updateForumSchema),
  forumController.updateForum
);

router.delete(
  "/:id",
  requireAuth(),
  findOrCreateUser,
  validateRequest(deleteForumSchema),
  forumController.deleteForum
);

export default router;
