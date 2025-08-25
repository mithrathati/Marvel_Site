const marvelPhases = {
    'Phase One': [
        {
            name: 'Iron Man',
            year: '2008',
            image: 'ironman1.jpg',
            director: 'Jon Favreau',
            description: 'Tony Stark builds an armored suit to fight the throes of evil.',
            rating: '7.9/10'
        },
        {
            name: 'The Incredible Hulk',
            year: '2008',
            image: 'hulk1.jpg',
            director: 'Louis Leterrier',
            description: 'Bruce Banner searches for a cure to his gamma radiation condition.',
            rating: '6.7/10'
        },
        {
            name: 'Iron Man 2',
            year: '2010',
            image: 'ironman2.jpg',
            director: 'Jon Favreau',
            description: 'Tony Stark faces pressure from the government and new rivals.',
            rating: '7.0/10'
        },
        {
            name: 'Thor',
            year: '2011',
            image: 'thor1.jpg',
            director: 'Kenneth Branagh',
            description: 'The powerful but arrogant god Thor is cast out of Asgard.',
            rating: '7.0/10'
        },
        {
            name: 'Captain America: The First Avenger',
            year: '2011',
            image: 'cap1.jpg',
            director: 'Joe Johnston',
            description: 'Steve Rogers becomes Captain America and fights Nazi-backed HYDRA.',
            rating: '6.9/10'
        },
        {
            name: 'The Avengers',
            year: '2012',
            image: 'avengers1.jpg',
            director: 'Joss Whedon',
            description: 'Earth\'s mightiest heroes must come together to fight an alien invasion.',
            rating: '8.0/10'
        }
    ],
    'Phase Two': [
        {
            name: 'Iron Man 3',
            year: '2013',
            image: 'ironman3.jpg',
            director: 'Shane Black',
            description: 'Tony Stark faces a powerful enemy, the Mandarin.',
            rating: '7.1/10'
        },
        {
            name: 'Thor: The Dark World',
            year: '2013',
            image: 'thor2.jpg',
            director: 'Alan Taylor',
            description: 'Thor must save the Nine Realms from a dark force.',
            rating: '6.8/10'
        },
        {
            name: 'Captain America: The Winter Soldier',
            year: '2014',
            image: 'cap2.jpg',
            director: 'Russo Brothers',
            description: 'Captain America discovers a conspiracy within S.H.I.E.L.D.',
            rating: '7.8/10'
        },
        {
            name: 'Guardians of the Galaxy',
            year: '2014',
            image: 'gotg1.jpg',
            director: 'James Gunn',
            description: 'A group of intergalactic criminals must pull together to save the galaxy.',
            rating: '8.0/10'
        },
        {
            name: 'Avengers: Age of Ultron',
            year: '2015',
            image: 'avengers2.jpg',
            director: 'Joss Whedon',
            description: 'The Avengers fight against the artificial intelligence Ultron.',
            rating: '7.3/10'
        },
        {
            name: 'Ant-Man',
            year: '2015',
            image: 'antman1.jpg',
            director: 'Peyton Reed',
            description: 'Scott Lang becomes Ant-Man and must save the world.',
            rating: '7.3/10'
        }
    ],
    'Phase Three': [
        {
            name: 'Captain America: Civil War',
            year: '2016',
            image: 'cap3.jpg',
            director: 'Anthony Russo',
            description: 'The Avengers must fight for their freedom against the S.H.I.E.L.D. forces.',
            rating: '8.3/10'
        },
        {
            name: 'Doctor Strange',
            year: '2016',
            image: 'doctorstrange1.jpg',
            director: 'Scott Derrickson',
            description: 'Dr. Stephen Strange becomes the Sorcerer Supreme and fights against the Dark Phoenix.',
            rating: '7.6/10'
        },
        {
            name: 'Guardians of the Galaxy Vol. 2',
            year: '2017',
            image: 'gotg2.jpg',
            director: 'James Gunn',
            description: 'The Guardians must protect their newfound family and fight against a new threat.',
            rating: '7.9/10'
        },
        {
            name: 'Spider-Man: Homecoming',
            year: '2017',
            image: 'spiderman1.jpg',
            director: 'Jon Watts',
            description: 'Peter Parker must reunite with his friends and save the world.',
            rating: '7.5/10'
        },
        {
            name: 'Thor: Ragnarok',
            year: '2017',
            image: 'thor3.jpg',
            director: 'Taika Waititi',
            description: 'Thor must save the world from the Dark World.',
            rating: '7.9/10'
        },
        {
            name: 'Black Panther',
            year: '2018',
            image: 'blackpanther1.jpg',
            director: 'Ryan Coogler',
            description: 'T\'Challa must protect his world from the evil king.',
            rating: '7.4/10'
        },
        {
            name: 'Avengers: Infinity War',
            year: '2018',
            image: 'avengers3.jpg',
            director: 'Anthony Russo',
            description: 'The Avengers must fight against the powerful Ultron.',
            rating: '8.5/10'
        },
        {
            name: 'Ant-Man and the Wasp',
            year: '2018',
            image: 'antman2.jpg',
            director: 'Peyton Reed',
            description: 'Scott Lang and Hope van Dyne must protect the world from the evil king.',
            rating: '7.2/10'
        },
        {
            name: 'Captain Marvel',
            year: '2019',
            image: 'capmarvel1.jpg',
            director: 'Anthony Russo',
            description: 'Carol Danvers becomes Captain Marvel and fights against the Dark Avengers.',
            rating: '7.0/10'
        },
        {
            name:'Endgame',
            year: '2019',
            image: 'avengers4.jpg',
            director: 'Anthony Russo',
            description: 'The Avengers must reunite to save the world from the Dark Avengers.',
            rating: '8.4/10'
        }
    ]
};

function createMoviesGrid() {
    const moviesContainer = document.querySelector('.extended-movies-grid');
    moviesContainer.style.display = 'flex';
    moviesContainer.style.overflowX = 'auto';
    moviesContainer.style.scrollBehavior = 'smooth';
    moviesContainer.style.padding = '20px 0';
    
    for (const [phase, movies] of Object.entries(marvelPhases)) {
        const phaseSection = document.createElement('div');
        phaseSection.className = 'phase-section';
        phaseSection.innerHTML = `
            <h2>${phase}</h2>
            <div class="phase-grid"></div>
        `;

        const phaseGrid = phaseSection.querySelector('.phase-grid');
        
        movies.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'movies-card';
            
            card.innerHTML = `
                <img src="${movie.image}" alt="${movie.name}">
                <h3>${movie.name}</h3>
                <div class="movie-info-inline">
                    <p><strong>Year:</strong>${movie.year}</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Rating:</strong> ${movie.rating}</p>
                    <p>${movie.description}</p>
                </div>
            `;

            phaseGrid.appendChild(card);
        });

        moviesContainer.appendChild(phaseSection);
    }
}

document.addEventListener('DOMContentLoaded', createMoviesGrid);