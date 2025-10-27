import express from 'express'
import {config } from 'dotenv'
import { getPool } from './config/database'
config()
const app=express()
app.use(express.json())
const PORT=process.env.PORT || 3000

app.get("/",(req:express.Request,res:express.Response)=>{
    res.send("testing......server started")
})

app.listen(PORT,()=>{
    console.log("Server Started Successfully......")
})

//connecting to db
const pool=getPool()
pool.then(pool=>{
    console.log("DB connected successfully.")
})
.catch(err=>{
    console.log("DB Failed to connect.",err)
})
