const data = { temperature: 27.31, humidity: 65.40 };
const ข้อความ = JSON.stringify(data);
const กลับเป็นobject = JSON.parse(ข้อความ);
console.log(กลับเป็นobject.temperature);
console.log(typeof กลับเป็นobject);