const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const locations = [];

let places = fetch(endpoint)
    .then(res => res.json())
    .then(data => data.forEach(i => {
        locations.push(i)
    }))
    .catch(err => console.error(err));

console.log(locations)
