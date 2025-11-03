# Library Management System

A comprehensive library management software built with Node.js, Express, and SQL Server. This system provides a RESTful API for managing library operations including user management, book cataloging, borrowing records, categories, and comments.

## Features

- **User Management**: Handle library members and administrators
- **Book Cataloging**: Manage library book inventory
- **Borrowing System**: Track book loans and returns
- **Categories**: Organize books by categories
- **Comments**: Allow users to comment on books
- **RESTful API**: Clean and structured API endpoints
- **SQL Server Integration**: Robust database backend

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: SQL Server (MSSQL)
- **Language**: TypeScript
- **Package Manager**: pnpm

## Prerequisites

- Node.js (v14 or higher)
- SQL Server
- pnpm

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd library-management-system
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   SQL_SERVER=your-sql-server-host
   SQL_DB=your-database-name
   SQL_USER=your-username
   SQL_PWD=your-password
   SQL_PORT=your-sql-server-port
   ```

4. Set up the database:
   Run the SQL script located at `src/config/librarymangement.sql` to create the necessary tables and schema.

## Usage

### Development

Run the development server with hot reload:
```bash
pnpm run dev
```

### Production

Build and start the production server:
```bash
pnpm run start
```

The server will start on `http://localhost:8081`

## API Endpoints

### Users
- `GET /api/users` - Get all users
- `GET /api/users/admins` - Get all administrators
- `GET /api/users/admin/:admin_id` - Get admin by ID
- `GET /api/users/admin/` - Get user by email
- `GET /api/users/members` - Get all members
- `GET /api/users/member/:member_id` - Get member by ID
- `POST /api/users/create/` - Create a new user
- `DELETE /api/users/delete/:id` - Delete a user

### Books
- Additional endpoints for book management

### Borrow Records
- Endpoints for managing borrowing transactions

### Categories
- Endpoints for book categories

### Comments
- Endpoints for book comments

## Project Structure

```
src/
├── config/
│   ├── database.ts          # Database configuration
│   └── librarymangement.sql # Database schema
├── controllers/             # Route handlers
├── repositories/            # Data access layer
├── router/                  # API routes
├── services/                # Business logic
├── types/                   # TypeScript interfaces
├── Utils/                   # Utility functions
└── index.ts                 # Application entry point
```

## Database Schema

The system uses SQL Server with the following main entities:
- Users (Members and Admins)
- Books
- Borrow Records
- Categories
- Comments

Entity Relationship Diagram:

![ERD](./images/ERD.png)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.
