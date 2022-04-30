const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const locations = [];

let places = fetch(endpoint)
    .then(res => res.json())
    .then(data => locations.push(...data))
    .catch(err => console.error(err));


const findMatches = (word,locations) => {
    return locations.filter(i => {
        const r = new RegExp(word,'gi')
        return i.city.match(r) || i.state.match(r)
    });
};

