// import functions and grab DOM elements
import { getAvsPlayers } from './fetch-utils.js';
import { renderAvsPlayer } from './render-utils.js';

const avsPlayersEl = document.querySelector('.avs-players');

// let state


// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

window.addEventListener('load', async () => {
    fetchAndDisplayAvsPlayers();
});

async function fetchAndDisplayAvsPlayers() {
    const avsPlayers = await getAvsPlayers();
    for (let avs of avsPlayers) {
        const avsPlayerCard = renderAvsPlayer(avs);

        avsPlayersEl.append(avsPlayerCard);
    }
}