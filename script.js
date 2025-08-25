// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior:'smooth'});
    });
});

// Character data (you can expand this)
const characters = [
    {
        name: 'Captain America',
        image: 'captain-america.jpg',
        cursorImage: 'shield-cursor.png'
    },
    {
        name: 'Iron Man',
        image: 'iron-man.jpg',
        cursorImage: 'ironman-cursor.png'
    },
    {
        name: 'Thor',
        image: 'thor.jpg',
        cursorImage:'hammer.png'
    },
    {
        name: 'Spider-Man',
        image: 'spider-man.jpg',
        cursorImage:'spider-cursor.png'
    },
    {
        name: 'Hulk',
        image: 'hulk.jpg',
        cursorImage:'hulk-cursor.png'
    },
    {
        name: 'Hawkeye',
        image: 'hawkeye.jpg',
        cursorImage:'hawkeye-cursor.png'
    },
    {
        name:'Dr-Strange',
        image:'dr-strange.jpg',
        cursorImage:'dr-strange-cursor.png'
    },
    {
        name:'Black-Widow',
        image:'black-widow.jpg',
        cursorImage:'black-widow-cursor.png'
    }
];

function createCharacterCards() {
    const characterGrid = document.querySelector('.character-grid');
    characterGrid.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
        `;

        // Add custom cursor on hover
        card.addEventListener('mouseenter', () => {
            card.style.cursor = `url('${character.cursorImage}'), auto`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.cursor = 'default';
        });

        characterGrid.appendChild(card);
    });
}

// Initialize the character cards
document.addEventListener('DOMContentLoaded', createCharacterCards);

// You'll need to create an 'images' folder and add the following images:
// - iron-man.jpg
// - thor.jpg
// - spider-man.jpg
// - marvel-banner.jpg

// This is a basic structure for your Marvel website. To complete the setup:

// 1. Create an 'images' folder and add the required images
// 2. You can expand the character data in the JavaScript file
// 3. Add more sections like Movies, Comics, etc.
// 4. Enhance the design with more Marvel-themed colors and effects

// The website features:
// - Responsive navigation
// - Hero section with background image
// - Character cards with hover effects
// - Smooth scrolling
// - Mobile-friendly design

// Would you like me to add any specific feature or section to this base structure?

const movieData = {
    'The Avengers': {
        year: '2012',
        director: 'Joss Whedon',
        description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.',
        rating: '8.0/10'
    },
    'Age of Ultron': {
        year: '2015',
        director: 'Joss Whedon',
        description: 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.',
        rating: '7.3/10'
    },
    'The Infinity War': {
        year: '2018',
        director: 'Anthony and Joe Russo',
        description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        rating: '8.4/10'
    },
    'The End Game': {
        year: '2019',
        director: 'Anthony and Joe Russo',
        description: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
        rating: '8.4/10'
    }
};

// Remove all popup and click functionality for movies grid
document.querySelectorAll('.movies-card').forEach(card => {
    // Remove any existing click listeners
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
});

// Clean up any existing popup elements
const existingPopup = document.querySelector('.movie-popup');
if (existingPopup) {
    existingPopup.remove();
}


function createCharacterPopup(character) {
    const popup = document.createElement('div');
    popup.className = 'character-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">&times;</span>
            <div class="character-details">
                <img src="${character.image}" alt="${character.name}">
                <div class="character-info">
                    <h2>${character.name}</h2>
                    <p class="real-name">${character.realName}</p>
                    <p class="description">${character.description}</p>
                    <div class="powers-list">
                        <h3>Powers & Abilities</h3>
                        <ul>
                            ${character.powers.map(power => `<li>${power}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Add close functionality
    const closeBtn = popup.querySelector('.close-popup');
    closeBtn.addEventListener('click', () => popup.classList.remove('active'));
    popup.addEventListener('click', (e) => {
        if (e.target === popup) popup.classList.remove('active');
    });
    
    return popup;
}

// Add click event to character cards
document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
        const popup = createCharacterPopup(characterData[card.dataset.characterId]);
        popup.classList.add('active');
    });
});
