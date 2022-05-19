/*
The HTML document contains an unordered list with multiple list items, each with a data-time which reflect a time in minutes and seconds. Our goal is to take all of these times and calculate the total in hours, minutes, and seconds.
*/


let timesArr = Array.from(document.querySelectorAll('[data-time]'))
    .map(i => i.getAttribute('data-time').split(':'))
    .map(i => [parseInt(i[0]), parseInt(i[1])]);

let res = timesArr.reduce((i, total) => {
    total[0] += i[0];
    total[1] += i[1];
    return total;
}, [0, 0])


let secsRem = res[1] % 60;
let totalMin = ((res[1] - secsRem) / 60) + res[0];
let minRem = (totalMin) % 60;
let hours = (totalMin - minRem) / 60;


console.log(`Total video time: ${hours} hours, ${minRem} minutes, and ${secsRem} seconds`);