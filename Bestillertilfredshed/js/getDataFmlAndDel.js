
console.log("hej")
document.addEventListener('DOMContentLoaded', () => {
fetch('http://localhost:8181/api/FML')
    .then(response => response.json())
    .then(data => {
        console.log(data)
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
    dropdownFML.addEventListener('change', () => {
        const selectedFMLId = dropdownFML.value;

        fetchLocations(selectedFMLId);
        console.log("hey")
    });


    // insert the fetch code here
});
const dropdownDelLok = document.getElementById('dropdownDelLok');
dropdownDelLok.innerHTML = "<option value=''>Vælg Dellokalitet</option>";

function fetchLocations(selectedFMLId) {
    fetch(`http://localhost:8181/api/location/fml/${selectedFMLId}`)
        .then(response => response.json())
        .then(locations => {
            console.log(locations)
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