export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if( Client.checkForName(formText) ) {

        console.log("::: Form Submitted :::")

        fetch('/api/test',{    
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                txt: formText
            })
        })
        .then(res => res.json())
        .then(data => {           
            document.getElementById("results").innerHTML = data.status.msg
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
}
