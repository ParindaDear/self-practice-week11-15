/* 1. โจทย์ ให้สร้าง formatter:
Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Bangkok",
})
แล้วใช้ formatter.format กับวันที่: "2025-03-01T02:45:00Z" */
const date = new Date("2025-03-01T02:45:00Z")

const formatter = Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Bangkok",
})

console.log(formatter.format(date)) //1 Mar 2025, 09:45

/* 2. โจทย์ เขียนโค้ดแสดงค่า Intl.DateTimeFormat().resolvedOptions()
และดึงออกมาเฉพาะ:
locale
timeZone
hourCycle */
const options = Intl.DateTimeFormat().resolvedOptions()
console.log("locale:", options.locale) //locale: th-TH
console.log("timeZone:", options.timeZone) //timeZone: Asia/Bangkok
console.log("hourCycle:", options.hourCycle) //hourCycle: undefined

/*3. ให้ใช้ .toString()  .toISOString()  .toLocaleString()
เพื่อแสดงวันเวลาใน 3 รูปแบบและอธิบาย “ความต่าง” ของแต่ละแบบ
กำหนดวันที่: const d = new Date("2025-02-02T11:15:00.150Z") */
const d = new Date("2025-02-02T11:15:00.150Z");

console.log("toString():", d.toString());
console.log("toISOString():", d.toISOString());
console.log("toLocaleString():", d.toLocaleString());

/* 4. ให้ใช้:
toLocaleString("th-TH", { 
  dateStyle: "full", 
  timeStyle: "short" 
})
กับวันที่: "2025-12-31T23:30:00Z"
แล้วดูว่า → จะถูกเลื่อนไป วันถัดไป หรือไม่
เพราะ timezone ไทยคือ UTC+7*/
const d4 = new Date("2025-12-31T23:30:00Z");

const result = d4.toLocaleString("th-TH", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone: "Asia/Bangkok",
});

console.log(result);
//วันพฤหัสบดีที่ 1 มกราคม พ.ศ. 2569 เวลา 06:30
