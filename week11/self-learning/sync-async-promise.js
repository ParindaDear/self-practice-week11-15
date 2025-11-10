/*Exercise 1: Basic Promise
ให้สร้างฟังก์ชัน downloadFile(isNetworkError) ที่ใช้ Promise
ถ้า isNetworkError = false → resolve("Download success!")
ถ้า isNetworkError = true → reject("Network Error!")

สิ่งที่ต้องทำ : เรียกใช้ด้วย .then().catch()
แสดงผลเป็น: ถ้าสำเร็จ → "Download success!"
           ถ้าล้มเหลว → "Network Error!" */
// async function downloadFile(isNetworkError){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(isNetworkError) {
//                 reject("Network Error!")
//             } else {
//                 resolve("Download success!")
//             }
//         }, 2000);
//     })
// }

// console.log("Start...");

// downloadFile(false)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Finish");
//     });

/*Exercise 2 (ปานกลาง): ใช้ async-await จัดการ Error
ให้แก้โค้ดข้อ 1 มาใช้แบบ async-await แทน
เงื่อนไข
- ใช้ try-catch
- ให้ log ข้อความ "Start download..." ก่อน await
- เมื่อเสร็จให้แสดง "Finish!" */
// function downloadFile(isNetworkError) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isNetworkError) reject("Network Error!");
//             else resolve("Download success!");
//         }, 2000);
//     });
// }

// async function run() {
//     console.log("Start download...");

//     try {
//         const result = await downloadFile(false);
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }

//     console.log("Finish!");
// }

// run();

/*Exercise 3: Delay async function
ให้สร้างฟังก์ชัน wait(ms) ที่เป็น promise และรอเวลาตามจำนวน ms
ตัวอย่างการเรียก 
    await wait(2000)
    console.log("2 seconds passed")
Hint: ใช้ setTimeout(resolve, ms) */
// function wait(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// async function test() {
//     console.log("Waiting 2 seconds...");
//     await wait(2000);
//     console.log("2 seconds passed");
// }

// test();

/*Exercise 4: Promise chain
สร้างฟังก์ชัน 3 ตัวที่ return promise:
    Function	   เวลา	     ผลลัพธ์
    login()	2s	  "Login    success"
    getUserData()	3s	"User data loaded"
    showDashboard()	1s	"Dashboard ready"
ให้เรียง chain แบบ
    login()
    .then(...)
    .then(...)
    .then(...)
ลองเปลี่ยนให้ getUserData() return reject() แล้วจัดการด้วย .catch() */
function login() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Login success"), 2000);
    });
}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("User data loaded"), 3000);
    });
}

function showDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dashboard ready"), 1000);
    });
}

login()
    .then((msg) => {
        console.log(msg);
        return getUserData();
    })
    .then((msg) => {
        console.log(msg);
        return showDashboard();
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log("Error:", err);
    })
