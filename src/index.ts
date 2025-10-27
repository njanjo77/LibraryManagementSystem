
import  express from "express";
import { config } from "dotenv";
import { Request,Response } from "express";
import { getPool } from "./config/database.js";
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello, the express server is running")
})

const port = 8081
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

await getPool().then(()=>{console.log("Connected to db Successfully")})
.catch((err)=>{console.log("Failed to connect to db.")})







