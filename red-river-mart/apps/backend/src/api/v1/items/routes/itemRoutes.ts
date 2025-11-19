import express, { Router } from "express";
import { validateRequest } from "../../middleware/validate";
import {
  getItemByIdSchema,
  postItemSchema,
  updateItemSchema,
  deleteItemSchema
} from "../validations/itemValidation";
import * as itemController from "../controllers/itemController";

const router: Router = express.Router();

// Get all items
router.get("/", itemController.getAllItems);

// Get item by ID
router.get(
  "/:id",
  validateRequest(getItemByIdSchema),
  itemController.getItemById
);

// Create new item
router.post(
  "/",
  validateRequest(postItemSchema),
  itemController.createItem
);

// Update item
router.put(
  "/:id",
  validateRequest(updateItemSchema),
  itemController.updateItem
);

// Delete item
router.delete(
  "/:id",
  validateRequest(deleteItemSchema),
  itemController.deleteItem
);

export default router;