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
