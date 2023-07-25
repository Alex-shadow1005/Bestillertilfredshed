document.addEventListener('DOMContentLoaded', () => {
    console.log("hej");

    fetch('http://localhost:8181/api/FML')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const dropdown = document.getElementById('dropdownFML');
            dropdown.innerHTML = "<option value=''>Vælg FML</option>";

            data.forEach(fml => {
                const option = document.createElement('option');
                option.value = fml.fml_id;
                option.text = fml.mdFmlNavn;
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error(error));

    const dropdownFML = document.getElementById('dropdownFML');
    const dropdownDelLok = document.getElementById('dropdownDelLok');

    dropdownFML.addEventListener('change', () => {
        const selectedFMLId = dropdownFML.value;
        fetchLocations(selectedFMLId);
        console.log("hey");
    });

    // insert the fetch code here

    // Submit form data
    const form = document.getElementById('newFormular');
    const submitButton = document.getElementById('submitindmelder');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const selectedFMLId = dropdownFML.value;
        const selectedLocationId = dropdownDelLok.value;
        const formData = {
            locationId: selectedLocationId,
            renhold_levering: form.renhold_levering.value,
            renhold_partner: form.renhold_partner.value,
            kantine_levering: form.kantine_levering.value,
            kantine_partner: form.kantine_partner.value,
            kommentar: form.kommentar.value
               // Add other form fields as needed
        };

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const requestBody = JSON.stringify(formData);

        fetch(`http://localhost:8181/api/indmældinger/${selectedLocationId}`, {
            method: 'POST',
            headers: headers,
            body: requestBody
        })
            .then(response => {
                console.log(response.headers);
                return response.json();
            })
            .then(responseData => {
                console.log(responseData);
            })
            .catch(error => {
                console.error("Error submitting form data:", error);
            });
    });
});











    // insert the fetch code here


function fetchLocations(selectedFMLId) {
    fetch(`http://localhost:8181/api/location/fml/${selectedFMLId}`)
        .then(response => response.json())
        .then(locations => {
            console.log(locations);
            clearLocations();
            var dropdown = document.getElementById("dropdownDelLok");
            locations.forEach(location => {
                var option = document.createElement("option");
                option.value = location.id;
                option.text = location.location;
                dropdown.add(option);
            });
        })
        .catch(error => {
            console.error("Error fetching locations:", error);
        });
}

function clearLocations() {
    var dropdown = document.getElementById("dropdownDelLok");
    dropdown.innerHTML = "<option value=''>Vælg Dellokalitet</option>";
}

