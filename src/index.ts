import  express from "express";
import { getPool } from "./config/database.js";
import userRouter from "./router/user.routes.js";
import borrowRouter from "./router/borrowrecords.Routes.js";
import categoriesRouter from './router/categories.Routes.js';
import booksRouter from './router/books.Routes.js';
import commentsRouter from './router/comments.Routes.js';

const app = express()
app.use(express.json())

app.use("/api",userRouter)
app.use("/api",borrowRouter)
app.use('/api/categories', categoriesRouter);
app.use('/api/books', booksRouter);
app.use('/api', commentsRouter);

//middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, the express server is running")
})

app.get("/", (req, res) => {res.send("Hello, the express server is running")})
//load routes

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})




getPool()
.then(() => console.log("Database connected successfully"))
.catch((err: any) => console.error("Database connection failed", err))
