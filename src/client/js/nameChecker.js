export function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText)
    if(inputText === "") {
        alert("Empty Field")
        return false
    }

    return true
}
