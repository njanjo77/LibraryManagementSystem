import * as borrowRepo from "../repositories/borrowrecords.Repository"
import { BorrowRecord, NewBorrowRecord, UpdateBorrowRecord,  ClearBorrowRecord } from "../types/borrowrecords.Interface.js";

export const getAllBorrowRecords = async (): Promise<BorrowRecord[]> => {
  return await borrowRepo.getAllBorrowRecords();
};

export const getBorrowRecordById = async (borrow_id: number): Promise<BorrowRecord | null> => {
  const record = await borrowRepo.getBorrowRecordById(borrow_id);
  if (!record) throw new Error(`Borrow record with ID ${borrow_id} not found`);
  return record;
};

export const createBorrowRecord = async (record: NewBorrowRecord) => {
  if (!record.user_id || !record.book_id) {
    throw new Error("User ID and Book ID are required");
  }
  return await borrowRepo.insertBorrowRecord(record);
};

export const updateBorrowRecord = async (record: UpdateBorrowRecord): Promise<void> => {
  if (!record.borrow_id) {
    throw new Error("Borrow ID is required for update");
  }
  await borrowRepo.updateBorrowRecord(record);
};

export const clearBorrowRecord = async (record: ClearBorrowRecord): Promise<void> => {
  if (!record.borrow_id) {
    throw new Error("Borrow ID is required to clear record");
  }
  await borrowRepo.clearBorrowRecord(record);
};

export const deleteBorrowRecord = async (borrow_id: number): Promise<void> => {
  const existing = await borrowRepo.getBorrowRecordById(borrow_id);
  if (!existing) {
    throw new Error(`Borrow record with ID ${borrow_id} does not exist`);
  }
  await borrowRepo.deleteBorrowRecord(borrow_id);
};
