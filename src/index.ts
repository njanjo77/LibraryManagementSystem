import  express from "express";
import { getPool } from './config/database';
import dotenv from 'dotenv';
import borrowRouter from "./router/borrowrecords.Routes";
import userRouter from "./router/user.routes";
dotenv.config();

const app = express()
app.use(express.json())

app.use("/api",userRouter)
app.use("/api",borrowRouter)

//middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, the express server is running")
})

const port = 8081
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})




getPool()
.then(() => console.log("Database connected successfully"))
.catch((err: any) => console.error("Database connection failed", err))
