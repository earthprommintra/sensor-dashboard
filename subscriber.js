import pool from "./db.js";
import mqtt from "mqtt";

const client = mqtt.connect('mqtt://broker.hivemq.com');

    client.on('connect', () =>{
        console.log('ตัวรับ: เชื่อมต่อสำเร็จ');
        client.subscribe('sensor/room1/data'); //สมัครรับ topicของเรื่องที่publisher.js
    })

    client.on('message', async(topic, message) => { //จะส่งmessageมาที่(topic,ตรงนี้)
        const data = JSON.parse(message.toString()); //ข้อมูลของตัวแปร data
        console.log('อุณหภูมิ :', data.temperature, 'ความชื้น :', data.humidity); //messageที่รับมาเป็นข้อมูลดิบต้องใช้ .toString()

        await pool.query(
            'INSERT INTO sensor_readings (temperature, humidity, recorded_at) VALUES ($1, $2, $3)',
            [data.temperature, data.humidity, data.timestamp]
        );
        console.log('บันทึก database แล้ว');
    });

    client.on('error', (err) => {
        console.log('เกิดข้อผิดพลาด', err)
    })