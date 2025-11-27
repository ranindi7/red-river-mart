import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userServices";
import { successResponse } from "../../models/responseModel";

export const fetchUsers = async(
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const users = await userService.fetchUsers();
        res.status(200).json(successResponse(users, "Users retrieved successfully"));
    } catch (error) {
        next (error);
    }
};

export const getUserById = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (user) {
            res.status(200).json(successResponse(user, "User retrieved successfully"));
        } else {
            res.status(404).json(successResponse(null, "User not found"));
        }
    } catch (error) {
        next(error);
  }
};

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
    ): Promise<void> => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(successResponse(newUser, "User created successfully"));
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
    ): Promise<void> => {
    try {
        console.log("Updating user:", req.params.id, req.body);
        const updatedUser = await userService.updateUser(
        req.params.id,
        req.body
        );
        res.status(200).json(successResponse(updatedUser, "User updated successfully"));
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
    ): Promise<void> => {
    try {
        await userService.deleteUser(req.params.id);
        res.status(200).json(successResponse(null, "User deleted successfully"));
    } catch (error) {
        next(error);
    }
};