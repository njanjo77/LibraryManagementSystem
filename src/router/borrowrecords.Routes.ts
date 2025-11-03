
import { Express } from 'express';
import * as BorrowRecordController from '../controllers/borrowrecords.Controllers';

const borrowRouter = (app: Express) => {;

app.get('/borrowrecords', BorrowRecordController.getAllBorrowRecords);
app.get('/borrowrecords/:borrow_id', BorrowRecordController.getBorrowRecordById);
app.post('/borrowrecords/create', BorrowRecordController.createBorrowRecord);
app.put('/borrowrecords/update/:borrow_id', BorrowRecordController.updateBorrowRecord)
app.patch('/borrowrecords/clear/:borrow_id', BorrowRecordController.clearBorrowRecord)
app.delete('/borrowrecords/delete/:borrow_id', BorrowRecordController.deleteBorrowRecord)
};




export default borrowRouter;