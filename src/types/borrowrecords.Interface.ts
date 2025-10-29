export interface BorrowRecord {
  borrow_id: number;
  user_id: number;
  book_id: number;
  borrow_date: Date;
  due_date: Date;
  return_date?: Date | null;
  status: 'Borrowed' | 'Overdue' | 'Returned';
  created_at: Date;
  updated_at: Date;
}

export interface NewBorrowRecord {
  user_id: number;
  book_id: number;
  borrow_date?: Date;
  due_date?: Date;
  status?: 'Borrowed' | 'Overdue' | 'Returned';
}

export interface UpdateBorrowRecord {
  borrow_id: number;
  return_date?: Date;
  status?: 'Borrowed' | 'Overdue' | 'Returned';
  updated_at?: Date;
}

export interface ClearBorrowRecord {
  borrow_id: number;
  status: 'Returned';
  return_date: Date;
}
