/*Exercise 1: Basic Promise
ให้สร้างฟังก์ชัน downloadFile(isNetworkError) ที่ใช้ Promise
ถ้า isNetworkError = false → resolve("Download success!")
ถ้า isNetworkError = true → reject("Network Error!")

สิ่งที่ต้องทำ : เรียกใช้ด้วย .then().catch()
แสดงผลเป็น: ถ้าสำเร็จ → "Download success!"
           ถ้าล้มเหลว → "Network Error!" */
async function downloadFile(isNetworkError){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isNetworkError) {
                reject("Network Error!")
            } else {
                resolve("Download success!")
            }
        }, 2000);
    })
}

console.log("Start...");

downloadFile(false)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Finish");
    });