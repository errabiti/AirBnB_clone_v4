document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });

    const searchButton = document.querySelector('button');
    searchButton.addEventListener('click', fetchFilteredPlaces);
});

let selectedStates = [];
let selectedCities = [];

function handleCheckboxChange(event) {
    const checkbox = event.target;
    const id = checkbox.dataset.id;
    const name = checkbox.dataset.name;
    
    if (checkbox.checked) {
        if (checkbox.parentElement.parentElement.parentElement.classList.contains('locations')) {
            if (checkbox.parentElement.parentElement.parentElement.classList.contains('locations')) {
                selectedStates.push({ id, name });
            } else {
                selectedCities.push({ id, name });
            }
        }
    } else {
        if (checkbox.parentElement.parentElement.parentElement.classList.contains('locations')) {
            if (checkbox.parentElement.parentElement.parentElement.classList.contains('locations')) {
                selectedStates = selectedStates.filter(state => state.id !== id);
            } else {
                selectedCities = selectedCities.filter(city => city.id !== id);
            }
        }
    }

    updateLocations();
}

function updateLocations() {
    const locationsH4 = document.querySelector('.locations h4');
    locationsH4.innerHTML = '';

    selectedStates.forEach(state => {
        locationsH4.innerHTML += `${state.name}, `;
    });

    selectedCities.forEach(city => {
        locationsH4.innerHTML += `${city.name}, `;
    });
}

function fetchFilteredPlaces() {
    const checkedAmenities = Array.from(document.querySelectorAll('.amenities input:checked')).map(input => input.dataset.id);
    const checkedCities = selectedCities.map(city => city.id);
    const checkedStates = selectedStates.map(state => state.id);

    const requestData = {
        amenities: checkedAmenities,
        cities: checkedCities,
        states: checkedStates
    }};