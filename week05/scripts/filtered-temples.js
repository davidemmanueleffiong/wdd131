let d = new Date();
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector('#hambutton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // always prevent — no more page navigations
        const text = link.textContent.trim().toLowerCase();

        if (text === 'home') {
            showTemples(temples);
        } else if (text === 'old') {
            showTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
        } else if (text === 'new') {
            showTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
        } else if (text === 'large') {
            showTemples(temples.filter(t => t.area > 90000));
        } else if (text === 'small') {
            showTemples(temples.filter(t => t.area < 10000));
        }

        // close mobile menu after clicking
        navigation.classList.remove('open');
        hamButton.classList.remove('open');
    });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
  },
  {
    templeName: "Calabar Nigeria Temple",
    location: "Calabar, Nigeria",
    dedicated: "2023, October, 1st",
    area: 15000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/calabar-nigeria-temple/calabar-nigeria-temple-65892-main.jpg"
  },
  {
    templeName: "Austin Texas Temple",
    location: "Austin, Texas, United States",
    dedicated: "2016, October, 15",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361-thumb.jpg"
  },
  {
    templeName: "Ephraim Utah Temple",
    location: "Ephraim, Utah, United States",
    dedicated: "1990, May, 12",
    area: 8500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/ephraim-utah-temple/ephraim-utah-temple-69056-main.jpg"
}
];

// Renders temple cards into the grid
function showTemples(templeList) {
    const grid = document.querySelector('.res-grid');
    grid.innerHTML = ''; // Clear existing cards

    templeList.forEach(temple => {
        const card = document.createElement('section');

        const name = document.createElement('h3');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.innerHTML = `<span>Location:</span> ${temple.location}`;

        const dedicated = document.createElement('p');
        dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;

        const size = document.createElement('p');
        size.innerHTML = `<span>Size:</span> ${temple.area.toLocaleString()} sq ft`;

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy'; // native lazy loading ✅

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(size);
        card.appendChild(img);

        grid.appendChild(card);
    });
}

// Filter logic for nav links
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (e) => {
        const text = link.textContent.trim().toLowerCase();

        if (text === 'old') {
            e.preventDefault();
            showTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900));
        } else if (text === 'new') {
            e.preventDefault();
            showTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000));
        } else if (text === 'large') {
            e.preventDefault();
            showTemples(temples.filter(t => t.area > 90000));
        } else if (text === 'small') {
            e.preventDefault();
            showTemples(temples.filter(t => t.area < 10000));
        }
        // Home link navigates normally — no preventDefault
    });
});

// Show all temples on initial load
showTemples(temples);