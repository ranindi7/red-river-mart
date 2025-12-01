import express, { Router } from "express";
import { validateRequest } from "../../middleware/validate";
import {
  getItemByIdSchema,
  postItemSchema,
  updateItemSchema,
  deleteItemSchema
} from "../validations/itemValidation";
import * as itemController from "../controllers/itemController";
import { requireAuth } from "@clerk/express";
import { findOrCreateUser } from "../../middleware/findOrCreateUser";

const router: Router = express.Router();

// Get all items
router.get(
  "/",
  findOrCreateUser,
  itemController.getAllItems
);

// Get item by ID
router.get(
  "/:id",
  findOrCreateUser,
  validateRequest(getItemByIdSchema),
  itemController.getItemById
);

// Create new item
router.post(
  "/",
  requireAuth(),
  validateRequest(postItemSchema),
  itemController.createItem
);

// Update item
router.put(
  "/:id",
  requireAuth(),
  validateRequest(updateItemSchema),
  itemController.updateItem
);

// Delete item
router.delete(
  "/:id",
  requireAuth(),
  validateRequest(deleteItemSchema),
  itemController.deleteItem
);

export default router;