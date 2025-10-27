
import  express from "express";
import { getPool } from './config/database';

const app = express()

app.get("/", (req, res) => {
    res.send("Hello, the express server is running")
})

const port = 8081
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})



