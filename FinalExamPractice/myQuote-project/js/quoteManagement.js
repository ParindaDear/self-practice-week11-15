import { getItems, deleteItem, addItem, editItem } from "./myLib/fetchUtils";
const quoteURL = `${import.meta.env.VITE_APP_URL}/quotes`

//GET
async function loadQuotes() {
    try{
        const quotes = await getItems(quoteURL)
        console.log(quotes)
        return quotes
    }catch(error){
        alert(`Quote: ${error}`)
    }
}

//DELETE
async function deleteQuotes(id) {
    try{
        const removeId = await deleteItem(quoteURL, id)
        return removeId
    }catch(error){
        alert(`Quote: ${error}`)
    }
}

//POST
async function addQuote(item){
    try{
        const addedQuote = await addItem(quoteURL, item)
        return addedQuote
    }catch(error){
        alert(`Quote: ${error}`)
    }
}

//PUT
async function editQuote(item){
    try{
        const editedQuote = await editItem(quoteURL, item)
        return editedQuote
    }catch(error){
        alert(`Quote: ${error}`)
    }
}
export { loadQuotes, deleteQuotes, addQuote, editQuote }