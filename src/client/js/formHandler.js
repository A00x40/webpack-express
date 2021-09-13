export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    fetch('/api/test',{    
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            txt: formText
        })
    })
    .then(res => {
        console.log(res)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
