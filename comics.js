const comicsData = [
    {
        name: 'The Amazing Spider-Man',
        image: 'spiderman-comic.jpg',
        year: '1963',
        writer: 'Stan Lee',
        description: 'The original Spider-Man comic series featuring Peter Parker.'
    },
    {
        name: 'X-Men',
        image: 'xmen-comic.jpg',
        year: '1963',
        writer: 'Stan Lee',
        description: 'The series that introduced the X-Men to the Marvel Universe.'
    },
    {
        name: 'Fantastic Four',
        image: 'fantastic-four-comic.jpg',
        year: '1961',
        writer: 'Stan Lee',
        description: 'The first installment in the Fantastic Four series.'
    },
    {
        name: 'Avengers',
        image: 'avengers-comic.jpg',
        year: '1963',
        writer: 'Stan Lee',
        description: 'The first Marvel Comics series featuring the Avengers.'
    },
    {
        name: 'Incredible Hulk',
        image: 'incredible-hulk-comic.jpg',
        year: '1962',
        writer: 'Stan Lee',
        description: 'The first comic featuring Dr. Bruce Banner, the Hulk.'
    },
    {
        name: 'Green Lantern',
        image: 'green-lantern-comic.jpg',
        year: '1962',
        writer: 'Stan Lee',
        description: 'The first comic featuring Hal Jordan, the Green Lantern.'
    },
    {
        name: 'Wolverine',
        image: 'wolverine-comic.jpg',
        year: '1974',
        writer: 'James Howlett',
        description: 'The first comic featuring James Howlett, the Wolverine.'
    },
    {
        name: 'Deadpool',
        image: 'deadpool-comic.jpg',
        year: '1961',
        writer: 'Bill Finger',
        description: 'The first comic featuring Wade Wilson, Deadpool.'
    },
    // Add more comics data as needed
];

function createComicsGrid() {
    const comicsGrid = document.querySelector('.extended-comics-grid');
    
    comicsData.forEach(comic => {
        const card = document.createElement('div');
        card.className = 'comics-card card-glow';
        
        card.innerHTML = `
            <img src="${comic.image}" alt="${comic.name}">
            <h3>${comic.name}</h3>
            <div class="comics-info">
                <p><strong>Year:</strong> ${comic.year}</p>
                <p><strong>Writer:</strong> ${comic.writer}</p>
                <p>${comic.description}</p>
            </div>
        `;

        comicsGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', createComicsGrid);