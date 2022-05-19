'use strict'
const h = document.querySelector('.hero');
const text = h.querySelector('h1');
const w = 500;

function shadow(e) {
    console.log('working')
    const { offsetWidth: width, offsetHeight: height } = h;
    let { offsetX: x, offsetY: y } = e;


    if (this !== e.target) {
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    };

    const xWalk = Math.round((x / width * w) - (w / 2));
    const yWalk = Math.round((y / height * w) - (w / 2));


    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;

}

document.addEventListener('mouseover', shadow)