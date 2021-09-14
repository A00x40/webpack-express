export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if( Client.checkForName(formText) ) {

        console.log("::: Form Submitted :::")

        fetch('http://localhost:3000/test',{    
            method: 'POST',
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                txt: formText
            })
        })
        .then(res => res.json())
        .then(data => {   
             
            let {agreement, subjectivity, irony} = data   
            console.log(data) 
            document.getElementById("results").innerHTML 
            = `Subjectivity: ${subjectivity}  `
            + ` -   Agreement: ${agreement}  ` 
            + ` -   Irony: ${irony}  ` 
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
}
