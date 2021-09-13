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
            let ans = ""
            console.log(data.language_list)
            for(let l of data.language_list)
                ans += l.name + "  "
            document.getElementById("results").innerHTML = ans
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
}
