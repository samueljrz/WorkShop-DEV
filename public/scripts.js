function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hidescroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addscroll")
} 

function checkFields(event) {
    
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link"
    ]

    const isEmpty = valuesToCheck.find(function(value) {
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        if(checkFields && checkIfIsEmpty) {
            return true;
        }
    })

    if(isEmpty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos o campos o campos")
    }
}

function del(id) {
    let url = `http://localhost:3000/ideias/${id}`
    const deletez = { method: 'DELETE' }; 
    fetch(url, deletez);
    location.reload();
}