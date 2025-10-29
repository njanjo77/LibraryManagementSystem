
import  express from "express";
import { getPool } from "./config/database";
import userRouter from "./router/user.routes";
const app = express()
app.use(express.json())

app.use("/api",userRouter)
app.get("/", (req, res) => {
    res.send("Hello, the express server is running")
})

const port = 8081
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
const pool=getPool()
pool.then(pool=>{
    console.log("Db Connected Successfully")
})
.catch(err=>{
    console.log("Failed to connect to DB",err)
})







