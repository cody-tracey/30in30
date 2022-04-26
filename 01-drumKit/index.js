"use strict"
const elems = [65, 68, 70, 71, 72, 74, 75, 76, 83];
const down = (e) => {
    if (elems.includes(e.keyCode)) {
        let l = document.body.querySelectorAll(`[data-key="${e.keyCode}"]`)

        if (!l[0].className.includes('playing')) l[0].className += ' playing';
       l[1].play();
    }
};
const up = (e) => {
    if (elems.includes(e.keyCode)) {
        let l = document.body.querySelectorAll(`[data-key="${e.keyCode}"]`)

        l[0].className = 'key'
        l[1].pause();
     }
};

document.addEventListener('keydown', e => down(e))

document.addEventListener('keyup', e => up(e))