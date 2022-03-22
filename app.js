// import functions and grab DOM elements
import { getAvsPlayers, getRpgClasses, getDogs, getLeagues } from './fetch-utils.js';
import { renderAvsPlayer, renderRpgClass, renderDog, renderSportsLeague } from './render-utils.js';

const avsPlayersEl = document.querySelector('.avs-players');
const rpgClassesEl = document.querySelector('.rpg-classes');
const dogBreedsEl = document.querySelector('.dogs');
const sportsLeaguesEl = document.querySelector('.sports-leagues');


// let state


// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

window.addEventListener('load', async () => {
    fetchAndDisplayAvsPlayers();
    fetchAndDisplayRpgClasses();
    fetchAndDisplayDogBreeds();
    fetchAndDisplaySportsLeagues();
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

async function fetchAndDisplaySportsLeagues() {
    const leagues = await getLeagues();
    for (let league of leagues) {
        const leagueCard = renderSportsLeague(league);

        sportsLeaguesEl.append(leagueCard);
    }
}