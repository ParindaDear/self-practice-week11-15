import { loadQuotes, deleteQuotes, addQuote, editQuote } from "./quoteManagement";

document.addEventListener("DOMContentLoaded", async () => {
    const quotes = await loadQuotes()
    console.log(quotes)

    const quoteListEle = document.getElementById("quoteList")
    quotes.forEach((quote) => {
        const quoteCardEle = newQuoteCard(quote)
        quoteListEle.appendChild(quoteCardEle)
    })
})

function newQuoteCard(quote){
    const divEle = document.createElement("div")
    divEle.className = "quote-card"
    divEle.dataset.id = quote.id

    const pQuote = document.createElement("p")
    pQuote.textContent = quote.content
    divEle.appendChild(pQuote)

    const pAuthor = document.createElement("p")
    pAuthor.className = "author"
    pAuthor.textContent = quote.author
    divEle.appendChild(pAuthor)

    const divActionEle = document.createElement("div")
    divActionEle.className = "actions"
    divEle.appendChild(divActionEle)

    const editButtonEle = document.createElement("button")
    editButtonEle.className = "edit"
    editButtonEle.dataset.id = quote.id
    editButtonEle.textContent = "Edit"
    divActionEle.appendChild(editButtonEle)
    editButtonEle.addEventListener("click", handleEdit)

    const deleteButtonEle = document.createElement("button")
    deleteButtonEle.className = "delete"
    deleteButtonEle.dataset.id = quote.id
    deleteButtonEle.textContent = "delete"
    divActionEle.appendChild(deleteButtonEle)
    deleteButtonEle.addEventListener("click", handleDelete)

    return divEle
}

async function handleDelete(e){
    const removeId = e.target.dataset.id
    const ans = confirm(`Do you sure to delete quote: ${removeId}`)
    if(ans){
        try{
            const deleteId = await deleteQuotes(removeId) //back
            const removeQuoteDivEle = document.querySelector(
                `div[data-id="${deleteId}"]` //html
            )
            const quoteListEle = document.querySelector("#quoteList")//เอาออกจากจอ เเต่ไม่ออกจากใจ
            quoteListEle.removeChild(removeQuoteDivEle)
        } catch(e){
            alert(`App: ${e.message}`)
        }
    } 
}

function handleEdit(e){
    const editId = e.target.dataset.id
    const editQuoteDivEle = document.querySelector(`div[data-id="${editId}"]`)
    const formEle = document.getElementById("quoteForm")
    formEle.quoteId.value = editId
    formEle.content.value = editQuoteDivEle.children[0].textContent
    formEle.author.value = editQuoteDivEle.children[1].textContent
}

const formEle = document.getElementById("quoteForm")
formEle.addEventListener("submit", handleAddEdit)

async function handleAddEdit(event) {
    event.preventDefault()
    const quoteId = formEle.quoteId.value
    const newContent = formEle.content.value
    const newAuthor = formEle.author.value

    if(quoteId){
        try{ //EDIT
            const updateQuote = await editQuote({ id: quoteId, content: newContent, author: newAuthor})
            const updateQuoteDivEle = document.querySelector(
                `div[data-id="${updateQuote.id}"]`
            )
            updateQuoteDivEle.children[0].textContent = updateQuote.content
            updateQuoteDivEle.children[1].textContent = updateQuote.author
        }catch(e){
            console.log(`App [Edit]: ${e.message}`)
        }
    }else{
        try{ //POST
            const newQuote = await addQuote({ content: newContent, author:newAuthor})
            const newQuoteDivEle = newQuoteCard(newQuote)
            const quoteListEle = document.getElementById("quoteList")
            quoteListEle.appendChild(newQuoteDivEle)
        }catch(e){
            alert(`App: ${e.message}`)
        }
    }
    formEle.quoteId.value = ""
    formEle.content.value = ""
    formEle.author.value = ""
}