import express from 'express'
import  pool  from './db.js';

const app = express();

app.use(express.static('public')); //ทุกอย่างที่เข้ามาให้ไปหา public

app.get('/hello', (req, res) => {    //res = ตอบกลับ
    res.send('สวัสดี'); //res.send = ส่งข้อความ
});

    app.get('/api/readings', async (req, res) => {
        const limit = req.query.limit || 20; //|| = หรือ
        res.status(500).json({
        })
    })

    try{
        const result = await pool.query(
            'SELECT * FROM sensor_readings ORDER BY recorded_at DESC LIMIT $1',
            [limit] //ORDER BY recorded_at DESC = เรียงตามเวลาจากใหม่ไปเก่า
        ); //LIMIT 20 = เอาแค่ 20 แถว, res.json = ส่งข้อมูลกลับ json
        res.json(result.rows);
    }catch(error){
        console.log('เกิดข้อผิดพลาด:', error) //print error ใน treminal
        res.status(500).json({message: 'เกิดข้อผิดพลาดในการดึงข้อมูล'}) //อันนี้ส่งไปหน้า browser
    }

app.listen(3000, () => {    //app.listen = เปิด server
    console.log('server run in http://localhost:3000');
});