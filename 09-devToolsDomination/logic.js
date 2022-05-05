const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hey');

// Interpolated
console.log('hey %s', 'people');

// Styled
console.log("%c superman", 'background:blue; color:white;');
// warning!
console.warn("look out!");

// Error :|
console.error("404");

// Info
console.info("here is a tip");
// Testing
let arr = [1, 2];
console.assert(arr.length < 1, "THIS IS WRONG");
// clearing
// console.clear();
// Viewing DOM Elements
console.dir('p');

// Grouping together
let nums = [1, 2, 3];
nums.forEach(i => {
    console.groupCollapsed(`Number: ${i}`);
    console.log(i % 2 === 0);
    console.groupEnd(`Number: ${i}`);
});
// counting
for (let i = 0; i < 3; i++) {
    console.count();
};
// timing
console.time('res time');
alert('click to cont.');
console.timeLog('res time');
alert('click to cont. pt. 2');
console.timeEnd('res time')


