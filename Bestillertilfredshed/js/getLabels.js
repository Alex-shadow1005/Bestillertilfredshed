
    let inputs = [];
    for (let i = 1; i <= 14; i++) {
    let input = document.createElement("input");
    input.type = "text";
    inputs.push(input);
}
    fetch('/getDataFromDB')
    .then(response => response.json())
    .then(data => {
    for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = data['item' + (i+1)];
}
});
    inputs.forEach(input => {
    document.querySelector('.title-container').appendChild(input);
});

Note: You will need to replace /getDataFromDB with the URL of your server endpoint that returns the data from your database.




