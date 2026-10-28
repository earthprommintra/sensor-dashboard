import { readTemperature } from "./sensor.js";
import { readHumidity } from "./sensor.js";

async function read(){
    const readingTemp = await readTemperature();
    const readingHumi = await readHumidity();
    console.log("อุณหภูมิ :", readingTemp.value.toFixed(2)
                ,"เวลาที่วัดอุณหภูมิ :", readingTemp.timestamp
                , "ความชื้น :",readingHumi.value.toFixed(2)
                ,"เวลาที่วัดความชื้น :", readingHumi.timestamp);
}

setInterval(read, 2000); //ใช้ setintervalได้เลยอย่าคิดมาก