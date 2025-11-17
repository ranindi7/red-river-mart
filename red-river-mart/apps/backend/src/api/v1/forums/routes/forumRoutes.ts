import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import {
  getForumByIdSchema,
  createForumSchema,
  updateForumSchema,
  deleteForumSchema
} from "../validations/forumValidation";
import * as forumController from "../controllers/forumController";

const router: Router = express.Router();

router.get("/", forumController.getAllForums);

router.get(
  "/:id",
  validateRequest(getForumByIdSchema),
  forumController.getForumById
);

router.post(
  "/",
  validateRequest(createForumSchema),
  forumController.createForum
);

router.put(
  "/:id",
  validateRequest(updateForumSchema),
  forumController.updateForum
);

router.delete(
  "/:id",
  validateRequest(deleteForumSchema),
  forumController.deleteForum
);

export default router;
