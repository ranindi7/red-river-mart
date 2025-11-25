import express, { Router } from "express";
import { validateRequest } from "../../middleware/validate";
import { 
    getUserByIdSchema,
    updateUserSchema,
    deleteUserSchema,
    createUserSchema
} from "../validations/userValidation"
import * as userController from "../controllers/userController"

const router: Router = express.Router();

// Get all users 
router.get("/", userController.fetchUsers);

// Get user by ID
router.get(
    "/:id",
    validateRequest(getUserByIdSchema),
    userController.getUserById
);

// Create new user
router.post("/", 
    validateRequest(createUserSchema),
    userController.createUser);

// Update existing users
router.put(
  "/:id",
  validateRequest(updateUserSchema),
  userController.updateUser
);

// Delete user
router.delete(
  "/:id",
  validateRequest(deleteUserSchema),
  userController.deleteUser
);

export default router;


