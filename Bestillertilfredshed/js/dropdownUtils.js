function selectPrevOption() {
    const dropdown = document.getElementById('dropdownDelLok');
    const selectedIndex = dropdown.selectedIndex;

    if (selectedIndex > 0) {
        dropdown.selectedIndex = selectedIndex - 1;
    }
}

function selectNextOption() {
    const dropdown = document.getElementById('dropdownDelLok');
    const selectedIndex = dropdown.selectedIndex;
    const lastOptionIndex = dropdown.options.length - 1;

    if (selectedIndex < lastOptionIndex) {
        dropdown.selectedIndex = selectedIndex + 1;
    }
}