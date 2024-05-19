const temples = [{
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Albuquerque New Mexico Temple",
        location: "New Mexico, United States",
        dedicated: "2000, March, 5",
        area: 34245,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x400/albuquerque-temple-lds-137885-wallpaper.jpg"
    }, {
        templeName: "Apia Samoa Temple",
        location: "Apia, Samoa",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x225/apia-samoa-temple-lds-495972-wallpaper.jpg"

    }, {
        templeName: "Anchorage Alaska Temple",
        location: "Alaska, United States",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/400x250/anchorage-temple-lds-746769-wallpaper.jpg"
    }, {
        templeName: "Asunción Paraguay Temple",
        location: "Asuncion, Paraguay",
        dedicated: "2002, May, 19",
        area: 11906,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/4-e49cfde212b104b97a0463371127c11e47f9c084.jpeg"
    }, {
        templeName: "Manhattan New York Temple",
        location: "Manhattan, United States",
        dedicated: "2004, June, 13",
        area: 20630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manhattan-new-york/400x250/manhattan-temple-lds-903670-wallpaper.jpg"
    }
];

const mainElement = document.querySelector('main');

function displayTemples(filteredTemples) {
    mainElement.innerHTML = ''; // Clear the current content

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        const templeInfo = document.createElement('div');
        templeInfo.classList.add('temple-info');
        templeInfo.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        `;
        templeCard.appendChild(templeInfo);

        const templeImage = document.createElement('img');
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.loading = "lazy";
        templeCard.appendChild(templeImage);

        mainElement.appendChild(templeCard);
    });
}

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        const filter = event.target.getAttribute('data-filter');
        let filteredTemples;

        switch (filter) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case 'all':
            default:
                filteredTemples = temples;
        }

        displayTemples(filteredTemples);
    });
});

// Display all temples by default
displayTemples(temples);