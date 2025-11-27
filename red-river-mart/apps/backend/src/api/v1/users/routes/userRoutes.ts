import express, { Router } from "express";
import { validateRequest } from "../../middleware/validate";
import { 
    getUserByIdSchema,
    updateUserSchema,
    deleteUserSchema,
    createUserSchema
} from "../validations/userValidation"
import * as userController from "../controllers/userController"
import { requireAuth } from "@clerk/express";
import { findOrCreateUser } from "../../middleware/findOrCreateUser";

const router: Router = express.Router();

// Get all users 
router.get(
  "/",
  findOrCreateUser,
  userController.fetchUsers
);

// Get user by ID
router.get(
    "/:id",
    requireAuth(),
    findOrCreateUser,
    validateRequest(getUserByIdSchema),
    userController.getUserById
);

// // Create new user
// router.post("/", 
//     validateRequest(createUserSchema),
//     userController.createUser);

// Update existing users
router.put(
  "/:id",
  requireAuth(),
  findOrCreateUser,
  validateRequest(updateUserSchema),
  userController.updateUser
);

// // Delete user
// router.delete(
//   "/:id",
//   validateRequest(deleteUserSchema),
//   userController.deleteUser
// );

router.post(
  "/", 
  requireAuth(),
  findOrCreateUser,
  validateRequest(createUserSchema),
  userController.createUser
);

router.delete(
  "/:id",
  requireAuth(),
  findOrCreateUser,
  validateRequest(deleteUserSchema),
  userController.deleteUser
);

export default router;


