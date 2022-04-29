
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

let fifteen = inventors.filter(i => i.year > 1499 && i.year < 1600);
console.log(1, fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
let names = inventors.map(i => `${i.first} ${i.last}`);
console.log(2, names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let birthdate = inventors.sort((a, b) => {
    let aLived = a.passed - a.year;
    let bLived = b.passed - b.year;
    return bLived - aLived
})
console.log(3, birthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let lived = inventors.reduce((total, i) => {
    let y = i.passed - i.year;
    return total += y;
}, 0);
console.log(4, lived);

// 5. Sort the inventors by years lived 

let livedSorted = inventors.sort((a, b) => {
    let aLived = a.passed - a.year;
    let bLived = b.passed - b.year;
    return bLived - aLived
});
console.log(5, livedSorted);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links.map(i => i.textContent).filter(i => i.includes('de'));
         
// 7. sort Exercise
// Sort the people alphabetically by last name
let lastSorted = people.map(i => i.split(',')).sort((a, b) => {
    if (a[0] > b[0]) return 1
    else if (a[0] < b[0]) return -1
    else return 0
}).map(i => i.join(','))

console.log(7, lastSorted)


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

let instances = data.reduce((total, i) => {
    if (total[i]) total[i]++
    else total[i] = 1;
    return total;
}, {});

console.log(instances)

