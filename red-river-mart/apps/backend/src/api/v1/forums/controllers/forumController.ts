import { Request, Response, NextFunction } from "express";
import * as forumService from "../services/forumServices";
import { successResponse } from "../../models/responseModel";

export const getAllForums = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const forums = await forumService.getAllForums();
    res.status(200).json(successResponse(forums, "Forums are retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

export const getForumById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const forum = await forumService.getForumById(Number.parseInt(req.params.id));
    if (forum) {
      res.status(200).json(successResponse(forum, "Forum is retrieved successfully"));
    } else {
      res.status(404).json(successResponse(null, "Forum was not found"));
    }
  } catch (error) {
    next(error);
  }
};

export const createForum = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newForum = await forumService.createForum(req.body);
    res.status(201).json(successResponse(newForum, "Forum is created successfully"));
  } catch (error) {
    next(error);
  }
};

export const updateForum = async (
    req: Request, 
    res: Response, 
    next: NextFunction
):Promise<void> => {
  try {
    const id = Number(req.params.id);
    const updatedForum = await forumService.updateForum(id, req.body);
    res.status(200).json({ 
      status: "success", data: updatedForum, message: "Forum updated successfully" 
    });
  } catch (error) {
    next(error);
  }
};

export const deleteForum = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await forumService.deleteForum(Number.parseInt(req.params.id));
    res.status(200).json(successResponse(null, "Forum is deleted successfully"));
  } catch (error) {
    next(error);
  }
};
