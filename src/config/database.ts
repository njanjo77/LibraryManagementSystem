import sql from 'mssql';
import dotenv from 'dotenv';
dotenv.config();

let pool: sql.ConnectionPool | null = null;

export async function getDbConnection(): Promise<sql.ConnectionPool> {
    if (pool && pool.connected) {
        return pool;
    }
    try {
        pool = new sql.ConnectionPool({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            server: process.env.DB_SERVER || 'localhost',
            database: process.env.DB_NAME,
            port: parseInt(process.env.DB_PORT || '1433'),
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            },
            options: {
                encrypt: false,
                trustServerCertificate: true
            }
        });
        await pool.connect();
        console.log('Database connection established');
        return pool;
    } catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Failed to connect to database');
    }
}

// Optional: Close pool on server shutdown
export async function closeDbConnection(): Promise<void> {
    if (pool && pool.connected) {
        await pool.close();
        pool = null;
        console.log('Database connection closed');
    }
}