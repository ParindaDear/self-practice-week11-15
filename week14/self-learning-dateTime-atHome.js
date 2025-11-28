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


/*5. คำนวนระยะเวลาห่างกันของ 2 เวลา (แบบมี timezone ต่างกัน)
กำหนด:
const t1 = "2025-03-01T02:45:00Z"        // UTC
const t2 = "2025-03-01T12:00:00+09:00"  // Tokyo time
ให้เขียนฟังก์ชัน diffMinutes(t1, t2) → return ความต่างเป็น “นาที”
(ผลลัพธ์ต้องเป็นค่าบวก) */
function diffMinutes(a, b) {
  const d1 = new Date(a)
  const d2 = new Date(b)

  const diffMs = Math.abs(d1 - d2)   
  return Math.floor(diffMs / 1000 / 60)
}

console.log(diffMinutes("2025-03-01T02:45:00Z", "2025-03-01T12:00:00+09:00")) //15

/*6. เช็คว่าเวลานี้คือ “วันเดียวกัน” ตาม timezone ที่กำหนด
ให้เขียนฟังก์ชัน: function isSameDayWithTZ(a, b, timeZone)
โดย input:
a = "2025-02-28T18:30:00Z"
b = "2025-03-01T02:00:00Z"
timeZone = "Asia/Bangkok"
ถาม: เมื่อแปลงเป็นเวลาไทยแล้ว เป็นวันเดียวกันหรือไม่? */
function convert(dateStr, timeZone) {
  return new Date(
    new Date(dateStr).toLocaleString("en-US", { timeZone })
  )
}

function isSameDayWithTZ(a, b, tz) {
  const d1 = convert(a, tz)
  const d2 = convert(b, tz)

  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

console.log(isSameDayWithTZ(
  "2025-02-28T18:30:00Z",
  "2025-03-01T02:00:00Z",
  "Asia/Bangkok"
)) //true
