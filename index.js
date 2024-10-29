
const output = document.getElementsByClassName('keycode')[0];
const card1 = document.getElementsByClassName('which')[0];
const card2 = document.getElementsByClassName('code')[0];
const card3 = document.getElementsByClassName('key')[0];
const card4 = document.getElementsByClassName('location')[0];
const cardsContainer = document.querySelector('.cards');
const heading = document.querySelector('.card-heading');
const initial = document.querySelector('.initial');

// Initially hide all components and show "Press any key"
cardsContainer.classList.add('hidden');
initial.classList.add('temp');

document.addEventListener("keydown", function (e) {
    const keycode = e.keyCode;
    const key = e.key;
    const code = e.code;
    let locationLabel;

    // Check the location and assign a readable label
    switch (e.location) {
        case 0:
            locationLabel = "General Key";
            break;
        case 1:
            locationLabel = "Left Key";
            break;
        case 2:
            locationLabel = "Right Key";
            break;
        case 3:
            locationLabel = "Numpad Key";
            break;
        default:
            locationLabel = "Unknown Location";
    }
    // Show the cards container when a key is pressed
    cardsContainer.classList.remove('hidden');
    heading.classList.remove('hidden');
    initial.classList.remove('temp');


    // Display values in respective HTML elements
    output.innerHTML = keycode;
    card1.innerHTML = keycode;
    card2.innerHTML = code;
    card3.innerHTML = key;
    card4.innerHTML = locationLabel;
});
