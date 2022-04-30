const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cities = [];
fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data));

const findMatches = (word, cities) => {
    return cities.filter(i => {
        const regex = new RegExp(word, 'gi');
        return i.city.match(regex) || i.state.match(regex)
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(i => {
        return `
            <li>
                <span class='name'>${i.city}, ${i.state}</span>
                <span class='population'>${i.population}</span>
            </li>
        `;
    }).join('');

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

