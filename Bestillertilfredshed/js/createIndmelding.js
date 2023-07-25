// Get the form element
const form = document.getElementById('newFormular');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect the form data
    const formData = new FormData(form);

    // Convert the form data to an object
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    // Send the form data to the server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8181/api/indmældinger/{locationid}');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Handle the successful response from the server
            console.log(xhr.responseText);
        } else {
            // Handle the error response from the server
            console.error(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(data));
});