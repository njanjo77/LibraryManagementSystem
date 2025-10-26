import assert from 'assert'
import {config} from 'dotenv'
import sql from 'mssql'
config()

assert(process.env.SQL_PWD,"Please provide server password")
assert(process.env.SQL_DB,"Proide database name")
assert(process.env.SQL_SERVER,"Provide server name")
assert(process.env.SQL_USER,"Provide user name")
assert(process.env.SQL_PORT,"Provide sql port")


export const sqlConfigurations={
    port:process.env.SQL_PORT,
    sqlconfig:{
        password:process.env.SQL_PWD,
        user:process.env.SQL_USER,
        server:process.env.SQL_SERVER,
        database:process.env.SQL_DB,
       pool:{
        max:10,
        min:0,
         idleTimeoutMillis: 30000
       },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
    },

}


export const getPool=async()=>{
    try {
        const pool =await sql.connect(sqlConfigurations.sqlconfig)
        return pool
    } catch (error:any) {
        console.log("Error connecting to the db")
        throw  error
    }
}

