import 'dotenv/config';
import pg from 'pg';

const pool = new pg.Pool({ //สร้างconnect
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default pool;