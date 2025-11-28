//ไฟล์นี้ทำ CRUD on quote
import { getItems } from "./myLib/fetchUtils"; 

//GET Quotes
async function loadQuotes() {
    try{
        const quotes = await getItems(`${import.meta.env.VITE_APP_URL}/quotes`) //getItems เป็น async func เลยเรียกลอยๆไม่ได้ต้องใช้ await
        console.log(quotes)
        return quotes
    } catch(error){
        alert(error)
    }
} 
export { loadQuotes }
//