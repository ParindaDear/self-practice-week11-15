function showDialog() {
    return new Promise((reslove) => {
        let ans
        const dialogMessage = document.getElementById("messageDialog")
        const btnOk = document.getElementById("okBtn")
        btnOk.addEventListener("click", () => {
            ans = btnOk.textContent
            dialogMessage.close()
            reslove(ans)
        })
        const btnCancel = document.getElementById("cancelBtn")
        btnCancel.addEventListener("click", () => {
            ans = btnCancel.textContent
            dialogMessage.close()
            reslove(ans)
        })
        dialogMessage.showModal()
    })
}
const result = await showDialog()
console.log(result)
if(result.toLowerCase().includes("ok")) console.log("go to ok action")
    else if (result.toLowerCase().includes("cancel")) console.log("got to cancel action")
console.log("bye")