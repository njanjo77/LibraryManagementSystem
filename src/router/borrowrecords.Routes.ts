import { Router } from "express";
import * as borrowController from "../controllers/borrowrecords.Controllers"
import { isAuthenticated } from "../Middlewares/bearAuth";

const borrowRouter = Router();
borrowRouter.get("/borrow-records", isAuthenticated,borrowController.getAllBorrowRecords);
borrowRouter.get("/borrow-records/:borrow_id", isAuthenticated,borrowController.getBorrowRecordById);
borrowRouter.post("/borrow-records/create", isAuthenticated,borrowController.createBorrowRecord);
borrowRouter.put("/borrow-records/update/:borrow_id", isAuthenticated,borrowController.updateBorrowRecord);
borrowRouter.patch("/borrow-records/clear/:borrow_id", isAuthenticated,borrowController.clearBorrowRecord);
borrowRouter.delete("/borrow-records/delete/:borrow_id", isAuthenticated,borrowController.deleteBorrowRecord);

export default borrowRouter;
