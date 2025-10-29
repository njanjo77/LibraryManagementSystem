import { Router } from "express";
import * as borrowController from "../controllers/borrowrecords.Controllers"

const borrowRouter = Router();
borrowRouter.get("/borrow-records", borrowController.getAllBorrowRecords);
borrowRouter.get("/borrow-records/:borrow_id", borrowController.getBorrowRecordById);
borrowRouter.post("/borrow-records/create", borrowController.createBorrowRecord);
borrowRouter.put("/borrow-records/update/:borrow_id", borrowController.updateBorrowRecord);
borrowRouter.patch("/borrow-records/clear/:borrow_id", borrowController.clearBorrowRecord);
borrowRouter.delete("/borrow-records/delete/:borrow_id", borrowController.deleteBorrowRecord);

export default borrowRouter;
