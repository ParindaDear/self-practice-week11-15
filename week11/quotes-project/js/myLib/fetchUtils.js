//ไฟล์นี้ทำ CRUD on any item
//GET 
//fetch("http://localhost:5000")
//เเก้ความยุ่งยากของการ hard code URL โดยใช้ .env หรือ .env.production
async function getItems(url) {
    try {
        const res = await fetch(url)  //fetch returns response object
        console.log(res)
        const data = await res.json() //json() converts json string to JS
        console.log(data)
        return data
    } catch (error) {
        throw new Error(error)
    }
}
export { getItems }

//POST

//PUT

//DELETE

