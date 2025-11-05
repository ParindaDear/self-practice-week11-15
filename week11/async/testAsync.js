function doSomething(hasProblem){
    return new Promise ((reslove, reject) => {
        setTimeout(
            () => (hasProblem ? reject("Fail working") : reslove("Fully Complete")),
            5000
        )
    })
}

//2. async-await 
//ปัญหาคือ awit อยู่คนเดียวไม่ได้ มันต้องอยู่ใต้ func ที่เป็น async เท่านั้น
// หลัง await ต้องรอให้เสร็จ รอเท่านั้นไม่ว่าจะนานเท่าไหร่
async function runWorking() {
    try{ //try คือคำสั่งที่เสี่ยงที่จะเกิด error
        const workingStatus = await doSomething(true)  //ถ้าใช้ตรงนี้เป็น true จะเกิด error ต้องแก้โดยใส่ try catch
        console.log(workingStatus)
        console.log("ending...")
    } catch(error) {
        console.log(error)
    }
}
runWorking()

//1) using .then().catch() 
// console.log("starting...")
// doSomething(true)
//   .then((workingStatus) => {
//     console.log(workingStatus)
//     console.log("ending...")
//   })
//   .catch((errorMessage) => {
//     console.log(errorMessage)
//   })
 
