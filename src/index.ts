
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
app.get("/users", (req, res) => {
    getpool().then(pool => {
        return pool.request()
            .query('SELECT * FROM Users')
    }).then(result => {
        console.log("Users fetched successfully");
        res.json(result.recordset)
    }).catch((err: any) => {
        console.error("Error fetching users", err)
        res.status(500).send("Internal Server Error")
    })
})

app.get("/books", (req, res) => {
    getpool().then(pool => {
        return pool.request()
            .query('SELECT * FROM Books')
    }).then(result => {
        console.log("Books fetched successfully");
        res.json(result.recordset)
    }).catch((err: any) => {
        console.error("Error fetching books", err)
        res.status(500).send("Internal Server Error")
    })
})

app.get("/categories", (req, res) => {
    getpool().then(pool => {
        return pool.request()
            .query('SELECT * FROM Categories')
    }).then(result => {
        console.log("Categories fetched successfully");
        res.json(result.recordset)
    }).catch((err: any) => {
        console.error("Error fetching categories", err)
        res.status(500).send("Internal Server Error")
    })
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

app.get("/comments", (req, res) => {
    getpool().then(pool => {
        return pool.request()
            .query('SELECT * FROM Comments')
    }).then(result => {
        console.log("Comments fetched successfully");
        res.json(result.recordset)
    }).catch((err: any) => {
        console.error("Error fetching comments", err)
        res.status(500).send("Internal Server Error")
    })
})

getpool()
.then(() => console.log("Database connected successfully"))
.catch((err: any) => console.error("Database connection failed", err))
