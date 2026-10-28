import pool from "./db.js";

async function test() {
    const result = await pool.query('SELECT NOW()'); //.query คือ สั่งให้ไปถาม database|SELECT NOW()=เวลาปัจจุบันจาก DB
    console.log(result.rows);
}

test();