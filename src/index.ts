
import  express from "express";
import { getpool } from './config/database';

const app = express()

app.get("/", (req, res) => {
    res.send("Hello, the express server is running")
})

const port = 8081
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
app.get("/borrowrecords", (req, res) => {
    getpool().then(pool => {
        return pool.request()
            .query('SELECT * FROM BorrowRecords')
    }).then(result => {
        console.log("Borrow records fetched successfully");
        res.json(result.recordset)
    }).catch((err: any) => {
        console.error("Error fetching borrow records", err)
        res.status(500).send("Internal Server Error")
    })
})

getpool()
.then(() => console.log("Database connected successfully"))
.catch((err: any) => console.error("Database connection failed", err))