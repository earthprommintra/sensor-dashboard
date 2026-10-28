import mqtt from 'mqtt';
import { readTemperature } from './sensor.js';
import { readHumidity } from './sensor.js';

const client = mqtt.connect('mqtt://broker.hivemq.com'); //mqtt.connect(ที่อยู่ broker(ตัวกลาง))
    client.on('connect', () => {
        console.log("เชื่อมต่อ broker สำร็จ!");

        setInterval(async () => {
            const temp = await readTemperature();
            const humi = await readHumidity();

            //สร้าง object
            const payload = {
                temperature: temp.value.toFixed(2),
                humidity:humi.value.toFixed(2),
                timestamp:temp.timestamp
            }
             const message = JSON.stringify(payload); //แปลง payload เป็น string เก็บใน messages
            
             client.publish('sensor/room1/data',message) //ส่งออก ('topicของเรื่อง,message')
             console.log('ส่งแล้ว', message);
        }, 2000);
    })

     client.on('error', (err) => { //ทำงานเมื่อเกิดปัญหา
        console.log('เกิดข้อผิดพลาด', err);
    })