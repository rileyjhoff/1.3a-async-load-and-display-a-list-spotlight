// import functions and grab DOM elements
import { getAvsPlayers, getRpgClasses, getDogs } from './fetch-utils.js';
import { renderAvsPlayer, renderRpgClass, renderDog } from './render-utils.js';

const avsPlayersEl = document.querySelector('.avs-players');
const rpgClassesEl = document.querySelector('.rpg-classes');
const dogBreedsEl = document.querySelector('.dogs');

// let state


// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

window.addEventListener('load', async () => {
    fetchAndDisplayAvsPlayers();
    fetchAndDisplayRpgClasses();
    fetchAndDisplayDogBreeds();
});

async function fetchAndDisplayAvsPlayers() {
    const avsPlayers = await getAvsPlayers();
    for (let avs of avsPlayers) {
        const avsPlayerCard = renderAvsPlayer(avs);

        avsPlayersEl.append(avsPlayerCard);
    }
}

async function fetchAndDisplayRpgClasses() {
    const rpgClasses = await getRpgClasses();
    for (let rpg of rpgClasses) {
        const classCard = renderRpgClass(rpg);

        rpgClassesEl.append(classCard);
    }
}

async function fetchAndDisplayDogBreeds() {
    const dogs = await getDogs();
    for (let dog of dogs) {
        const dogCard = renderDog(dog);

        dogBreedsEl.append(dogCard);
    }
}