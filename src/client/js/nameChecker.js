export function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText)
    if(inputText === "") {
        alert("Welcome, Captain!")
        return false
    }

    return true
}
