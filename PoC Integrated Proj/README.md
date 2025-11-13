# PoC2: Timestamp Conversion and Timezone Detection ของ Browser 

จำลอง timestamp ของ backend (Bangkok local time) ที่ส่งมาเป็น

```javascript
const bangkokLocalString = "2025-11-11T00:18:19";
```
ปล. ใช้เวลาเหมือน UAT: TC-PBI3-1 

---
## อธิบาย app.js

- แปลง Bangkok → UTC โดยใช้ `new Date()` และเพิ่ม offset +07:00  
  แล้วใช่ `.toISOString()` เพื่อได้ timestamp แบบ UTC

- ตรวจจับ timezone ของ browser ใช้ `Intl.DateTimeFormat().resolvedOptions().timeZone`

- แปลง UTC → เวลา local ของ browser ใช้ `new Date(...).toLocaleString()`

- กำหนด timeZone เป็นค่าของ browser และ hour12: false เพื่อให้ timestamp ตรงกับเวล local ของผู้ใช้โดยไม่ต้องคิดเป็น AM/PM 

---

## ทดลอง
1. อันดับแรกต้อง set sensors ใน browser ก่อน test  
   inspect -> 3 จุด -> sensors แล้วเพิ่ม Thailand ไปตามรูปเลย
   <img width="1919" height="789" alt="image" src="https://github.com/user-attachments/assets/bae8db99-fc17-4932-b56f-049a7d31777e" />

2. ลองเปลี่ยน Location เป็น London เพื่อทดสอบ
   <img width="800" height="356" alt="image" src="https://github.com/user-attachments/assets/b9045198-76ff-4a0a-99d0-50ad40413523" />

---

## แหล่งข้อมูลที่ไปศึกษามา
- เรื่อง resolvedOptions()
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
- เรื่อง Window.location
  http://developer.mozilla.org/en-US/docs/Web/API/Window/location#browser_compatibility
