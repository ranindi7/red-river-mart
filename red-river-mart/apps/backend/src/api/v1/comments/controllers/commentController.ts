import { Request, Response, NextFunction } from "express";
import * as commentService from "../services/commentServices";
import { successResponse } from "../../models/responseModel";
import { getAuth } from "@clerk/express";

export const getAllComments = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const comments = await commentService.getAllComments();
    res.status(200).json(successResponse(comments, "Comments are retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

export const getCommentsByForumId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const forumId = Number(req.params.forumId);
    const comments = await commentService.getCommentsByForumId(forumId);
    res.status(200).json(successResponse(comments, "Comments for the forum retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

export const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      res.status(401).json({ status: "error", message: "User not authenticated" });
      return;
    }
    const { text, forumId } = req.body;
    const newComment = await commentService.createComment({
      text,
      forumId,
      userId,
    });
    res.status(201).json(successResponse(newComment, "Comment created successfully"));
  } catch (error) {
    next(error);
  }
};

export const updateComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const commentId = Number(req.params.commentId);
    const { text } = req.body;
    const { userId } = getAuth(req);
    if (!userId) {
      res.status(401).json({ status: "error", message: "User not authenticated" });
      return;
    }
    const updatedComment = await commentService.updateComment(commentId, userId, text);
    res.status(200).json(successResponse(updatedComment, "Comment updated successfully"));
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      res.status(401).json({ message: "User was not authenticated" });
      return;
    }
    const commentId = Number(req.params.commentId);
    const comment = await commentService.getCommentById(commentId);
    if (!comment) {
      res.status(404).json({ message: "Comment was not found" });
      return;
    }
    if (comment.userId !== userId) {
      res.status(403).json({ message: "Unauthorized access" });
      return;
    }
    await commentService.deleteComment(commentId, userId);
    res.status(200).json(successResponse(null, "Comment was deleted successfully"));
  } catch (error) {
    next(error);
  }
};
