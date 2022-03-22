{/* <div class="avs-player">
    <h3>Gabriel Landeskog</h3>
    <img src="https://ubrpbqqozfkjakttjedg.supabase.in/storage/v1/object/sign/headshots/Landy.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWFkc2hvdHMvTGFuZHkuanBlZyIsImlhdCI6MTY0Nzk3NDkwNCwiZXhwIjoxOTYzMzM0OTA0fQ.T7vhtMaxeWKt0c9yi4bacznZmj86DZckyUUrlRwZpf8" alt="">
    <p>LW | 6'1 | 215 lb | Age: 29</p>
    <p>Sweden 🇸🇪</p>
    <p>Shoots: Left</p>
    <p>Draft: 2011 (COL), 2nd overall</p>
</div> */}

export function renderAvsPlayer(avs) {
    const playerCard = document.createElement('div');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');
    const infoEl = document.createElement('p');
    const nationalityEl = document.createElement('p');
    const shootsEl = document.createElement('p');
    const draftEl = document.createElement('p');

    playerCard.classList.add('avs-player');
    nameEl.textContent = avs.name;
    imgEl.src = avs.headshot;
    infoEl.textContent = avs.position + ' | ' + avs.height[0] + `'` + avs.height[1] + ' | ' + avs.weight + ' lb | Age: ' + avs.age;
    shootsEl.textContent = 'Shoots: ' + avs.shoots;
    nationalityEl.textContent = avs.nationality;
    draftEl.textContent = 'Draft: ' + avs.draft[0] + ' (' + avs.draft[1] + '), ' + avs.draft[2];

    playerCard.append(nameEl, imgEl, infoEl, nationalityEl, shootsEl, draftEl);

    return playerCard;
}