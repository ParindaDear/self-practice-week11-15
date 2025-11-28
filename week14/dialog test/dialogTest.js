async function showDialog() {
  return new Promise((resolve) => {
    let ans
    const dialogMessage = document.getElementById("messageDialog")
    const btnOK = document.getElementById("okBtn")
    btnOK.addEventListener("click", () => {
      ans = btnOK.textContent
      dialogMessage.close()
      resolve(ans)
    })
    const btnCancel = document.getElementById("cancelBtn")
    btnCancel.addEventListener("click", () => {
      ans = btnCancel.textContent
      dialogMessage.close()
      resolve(ans)
    })
 
    dialogMessage.showModal()
  })
}
const result = await showDialog()
console.log(result)
if (result.toLowerCase().includes("ok")) console.log("goto ok action")
else if (result.toLowerCase().includes("cancel"))
  console.log("goto cancel action")
console.log("good bye")