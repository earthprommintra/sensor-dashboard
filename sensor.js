export function readTemperature(){ //()ใส่ค่าที่ส่งเข้าไป
        return new Promise((resolve) => { //ขึ้นรอรับค่า
                setTimeout(() => {
                        resolve({ //งานใน resolveเสร็จแล้วส่งค่า
                                value:Math.random()*10 + 25,
                                timestamp:new Date()
                        });
                },500);
        });
} //{}ใช้ครอบเนื้อของฟังก์ขัน

export function readHumidity(){
        return new Promise((resolve) => {
                setTimeout(() => {
                        resolve({
                                value:Math.random()*30 + 40, //valueหรือtimestampเป็นแค่ตัวบอกกำกับเฉยๆ
                                timestamp:new Date()
                        });
                },500);
        });
        
}