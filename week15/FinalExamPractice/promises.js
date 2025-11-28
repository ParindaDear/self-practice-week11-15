//เรียนตอน week 11
//การ handle กับ function ที่เป็น async แล้ว return เป็น promise มี 2 แบบ
//แบบที่ 1 ใช้ then, catch
async function doSomething(hasProblem){
    return new Promise((reslove, reject) => {
        setTimeout(() => (hasProblem ? reject("Fail Working") : reslove("Fully Complete")), 5000)
    })
}
console.log("Starting...")
doSomething(false)
    .then(workingStatus => {
        console.log(workingStatus)
        console.log("Ending")
    })
    .catch((errrMessage) => {
        console.log(errrMessage)
    })

//แบบ 2 ใช้ async-await 
async function doSomething2(hasProblem){
    return new Promise((reslove, reject) => {
        setTimeout(() => (hasProblem ? reject("Fail Working") : reslove("Fully Complete")), 5000)
    })
}
console.log("Starting2...")
async function runWorking() {
    try{
        const workingStatus = await doSomething2(true)
        console.log(workingStatus)
        console.log("Ending...")
    }catch(error){
        console.log(error)
    }
}
runWorking()