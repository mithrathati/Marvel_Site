const extendedCharacters = [
    {
        name:'Captain America',
        image: 'captain-america.jpg',
        realName: 'Steve Rogers',
        description: 'Superhuman strength and agility',
        powers: ['Superhuman Strength', 'Agility', 'Superhuman Speed', 'Superhuman Durability'] 
    },
    {
        name: 'Iron Man',
        image: 'iron-man.jpg',
        realName: 'Tony Stark',
        description: 'Genius level intellect',
        powers: ['Genius Level Intellect', 'Superhuman Strength', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Thor',
        image: 'thor.jpg',
        realName: 'Thor Odinson',
        description: 'God of Thunder',
        powers: ['Superhuman Strength', 'Flight', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Spider-Man',
        image: 'spider-man.jpg',
        realName: 'Peter Parker',
        description: 'Spider-like abilities',
        powers: ['Spider-Sense', 'Web-Slinging', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Hulk',
        image: 'hulk.jpg',
        realName: 'Bruce Banner',
        description: 'Superhuman Strength and durability',
        powers: ['Superhuman Strength', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Hawkeye',
        image: 'hawkeye.jpg',
        realName: 'Clint Barton',
        description: 'Marksman and archer',
        powers: ['Marksmanship', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Doctor Strange',
        image: 'dr-strange.jpg',
        realName: 'Stephen Strange',
        description: 'Time Traveler and Mystic',
        powers: ['Time Travel', 'Teleportation', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Black Widow',
        image: 'black-widow.jpg',
        realName: 'Natasha Romanoff',
        description: 'Scarlet Witch of Marvel Comics',
        powers: ['Scarlet Power', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Black Panther',
        image: 'black-panther.jpg',
        realName: "T'Challa",
        description: 'King of Wakanda and protector of his people',
        powers: ['Enhanced Strength', 'Vibranium Suit', 'Master Combatant', 'Enhanced Speed']
    },
    {
        name: 'Captain Marvel',
        image: 'captain-marvel.jpg',
        realName: 'Carol Danvers',
        description: 'Former Air Force pilot turned cosmic superhero',
        powers: ['Energy Absorption', 'Flight', 'Superhuman Strength', 'Energy Projection']
    },
    {
        name: 'Scarlet Witch',
        image: 'scarlet-witch.jpg',
        realName: 'Wanda Maximoff',
        description: 'Mystic and Shadow Weaver',
        powers: ['Shadow Control', 'Energy Projection', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Vision',
        image: 'vision.jpg',
        realName: 'Paul Bettany',
        description: 'Psionic and Time Traveler',
        powers: ['Psionic Powers', 'Time Travel', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Winter Soldier',
        image: 'winter-soldier.jpg',
        realName: 'Bucky Barnes',
        description: 'Winter Soldier and Soldier of the North',
        powers: ['Winter Soldier', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Ant-Man',
        image: 'ant-man.jpg',
        realName: 'Scott Lang',
        description: 'Superhuman Strength and Agility',
        powers: ['Superhuman Strength', 'Agility', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Star Lord',
        image: 'star-lord.jpg',
        realName: 'Peter Quill',
        description: 'Star Guardian and Celestial Warrior',
        powers: ['Celestial Warrior', 'Superhuman Strength', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Groot',
        image: 'groot.jpg',
        realName: 'Groot',
        description: 'Giant and Green',
        powers: ['Giant', 'Superhuman Strength', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Rocket',
        image: 'rocket.jpg',
        realName: 'Rocket Raccoon',
        description: 'Space Traveler and Rocket Scientist',
        powers: ['Space Travel', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Loki',
        image: 'loki.jpg',
        realName: 'Loki Laufeyson',
        description: 'God of Mischief and Mischievous Genius',
        powers: ['Mischief', 'Mischievous Genius', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Deadpool',
        image: 'deadpool.jpg',
        realName: 'Wade Wilson',
        description: 'Superhuman Speed and Durability',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name: 'Wolverine',
        image: 'wolverine.jpg',
        realName: 'Logan',
        description: 'Mutant and Adrenaline Rush',
        powers: ['Mutant', 'Adrenaline Rush', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Thanos',
        image: 'thanos.jpg',
        realName: 'Thanos',
        description: 'God of Mischief and Mischievous Genius',
        powers: ['Mischief', 'Mischievous Genius', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Sam-Wilson',
        image: 'sam-wilson.jpg',
        realName: 'Sam Wilson',
        description: 'Sam Wilson is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Nick Fury',
        image: 'nick-fury.jpg',
        realName: 'Nick Fury',
        description: 'Nick Fury is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Nebula',
        image: 'nebula.jpg',
        realName: 'Nebula',
        description: 'Nebula is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Gamora',
        image: 'gamora.jpg',
        realName: 'Gamora',
        description: 'Gamora is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Drax',
        image: 'drax.jpg',
        realName: 'Drax',
        description: 'Drax is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Mantis',
        image: 'mantis.jpg',
        realName: 'Mantis',
        description: 'Mantis is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Ms Marvel',
        image: 'ms-marvel.jpg',
        realName: 'Ms Marvel',
        description: 'Ms Marvel is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Hela',
        image: 'hela.jpg',
        realName: 'Hela',
        description: 'Hela is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Pepper-Potts',
        image: 'pepper-potts.jpg',
        realName: 'Pepper Potts',
        description: 'Pepper Potts is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Jane Foster',
        image: 'jane-foster.jpg',
        realName: 'Jane Foster',
        description: 'Jane Foster is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Dare Devil',
        image: 'matt-murdock.jpg',
        realName: 'Matt Murdock',
        description: 'Matt Murdock is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Peggy Carter',
        image: 'peggy-carter.jpg',
        realName: 'Peggy Carter',
        description: 'Peggy Carter is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Shang-Chi',
        image: 'shang-chi.jpg',
        realName: 'Shang-Chi',
        description: 'Shang-Chi is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    },
    {
        name:'Giah',
        image: 'giah.jpg',
        realName: 'Giah',
        description: 'Giah is a fictional character in the Marvel Cinematic Universe (MCU) media franchise and is the protagonist of the X-Men film series.',
        powers: ['Superhuman Speed', 'Superhuman Durability', 'Superhuman Speed', 'Superhuman Durability']
    }
];

function createExtendedCharacterGrid() {
    const characterGrid = document.querySelector('.extended-character-grid');
    characterGrid.innerHTML = ''; // Clear existing content
    
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'character-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <div class="character-details">
                <div class="character-image">
                    <img id="popup-image" src="" alt="">
                </div>
                <div class="character-info">
                    <h2 id="popup-name"></h2>
                    <p class="real-name">Real Name: <span id="popup-realname"></span></p>
                    <div class="description">
                        <h3>Description</h3>
                        <p id="popup-description"></p>
                    </div>
                    <div class="powers-list">
                        <h3>Powers & Abilities</h3>
                        <ul id="popup-powers"></ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(popup);

    // Improved close functionality
    const closeBtn = popup.querySelector('.close-popup');
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
        }
    });

    // Create character cards
    extendedCharacters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;

        // Enhanced click event for popup
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const popupImage = document.getElementById('popup-image');
            const popupName = document.getElementById('popup-name');
            const popupRealName = document.getElementById('popup-realname');
            const popupDescription = document.getElementById('popup-description');
            const popupPowers = document.getElementById('popup-powers');

            // Update popup content
            popupImage.src = character.image;
            popupImage.alt = character.name;
            popupName.textContent = character.name;
            popupRealName.textContent = character.realName;
            popupDescription.textContent = character.description;
            
            // Clear and update powers list
            popupPowers.innerHTML = character.powers
                .map(power => `<li><span class="power-icon">⚡</span>${power}</li>`)
                .join('');

            // Show popup with animation
            popup.classList.add('active');
        });

        characterGrid.appendChild(card);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', createExtendedCharacterGrid);