import { Request, Response, NextFunction } from "express";
import * as itemService from "../services/itemService";
import { successResponse } from "../../models/responseModel";

export const getAllItems = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const items = await itemService.fetchAllItems();
    res.status(200).json(successResponse(items, "Items retrieved successfully"));
  } catch (error) {
    next(error);
  }
};

export const getItemById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const item = await itemService.getItemById(Number.parseInt(req.params.id));
    if (item) {
      res.status(200).json(successResponse(item, "Item retrieved successfully"));
    } else {
      res.status(404).json(successResponse(null, "Item not found"));
    }
  } catch (error) {
    next(error);
  }
};

export const createItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newItem = await itemService.createItem(req.body);
    res.status(201).json(successResponse(newItem, "Item created successfully"));
  } catch (error) {
    next(error);
  }
};

export const updateItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedItem = await itemService.updateItem(
      Number.parseInt(req.params.id),
      req.body
    );
    res.status(200).json(successResponse(updatedItem, "Item updated successfully"));
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await itemService.deleteItem(Number.parseInt(req.params.id));
    res.status(200).json(successResponse(null, "Item deleted successfully"));
  } catch (error) {
    next(error);
  }
};