import { Request, Response } from "express";
import * as borrowService from "../services/borrowrecords.Service"

export const getAllBorrowRecords = async (req: Request, res: Response) => {
  try {
    const records = await borrowService.getAllBorrowRecords();
    return res.status(200).json({
      success: true,
      message: "Borrow records fetched successfully",
      data: records,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch borrow records",
    });
  }
};

export const getBorrowRecordById = async (req: Request, res: Response) => {
  try {
    const { borrow_id } = req.params;
    if (!borrow_id) {
      return res.status(400).json({ success: false, message: "Borrow ID is required" });
    }
    const record = await borrowService.getBorrowRecordById(Number(borrow_id));
    return res.status(200).json({
      success: true,
      message: "Borrow record fetched successfully",
      data: record,
    });
  } catch (error: any) {
    return res.status(404).json({
      success: false,
      message: error.message || "Borrow record not found",
    });
  }
};

export const createBorrowRecord = async (req: Request, res: Response) => {
  try {
    const recordData = req.body;
    if (!recordData.user_id || !recordData.book_id) {
      return res.status(400).json({
        success: false,
        message: "User ID and Book ID are required",
      });
    }

    const record = await borrowService.createBorrowRecord(recordData);
    return res.status(201).json({
      success: true,
      message: "Borrow record created successfully",
      data: record,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create borrow record",
    });
  }
};

export const updateBorrowRecord = async (req: Request, res: Response) => {
  try {
    const { borrow_id } = req.params;
    const updateData = req.body;

    if (!borrow_id) {
      return res.status(400).json({
        success: false,
        message: "Borrow ID is required for update",
      });
    }

    await borrowService.updateBorrowRecord({
      borrow_id: Number(borrow_id),
      ...updateData,
    });

    return res.status(200).json({
      success: true,
      message: "Borrow record updated successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to update borrow record",
    });
  }
};

export const clearBorrowRecord = async (req: Request, res: Response) => {
  try {
    const { borrow_id } = req.params;
    const { status, return_date } = req.body;

    if (!borrow_id) {
      return res.status(400).json({
        success: false,
        message: "Borrow ID is required to clear record",
      });
    }

    await borrowService.clearBorrowRecord({
      borrow_id: Number(borrow_id),
      status: status || "Returned",
      return_date: return_date || new Date(),
    });

    return res.status(200).json({
      success: true,
      message: "Borrow record cleared successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to clear borrow record",
    });
  }
};

export const deleteBorrowRecord = async (req: Request, res: Response) => {
  try {
    const { borrow_id } = req.params;
    if (!borrow_id) {
      return res.status(400).json({
        success: false,
        message: "Borrow ID is required for deletion",
      });
    }

    await borrowService.deleteBorrowRecord(Number(borrow_id));
    return res.status(200).json({
      success: true,
      message: "Borrow record deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to delete borrow record",
    });
  }
};
