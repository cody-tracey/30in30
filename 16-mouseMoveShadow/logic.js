'use strict'
const h1 = document.querySelector('.hero');
const text = document.querySelector('h1')

const shadow = e => {
    const { offsetWidth: width, offsetHeight, height } = h1;
    let { offsetX: x, offsetY: y } = e;

    

}

h1.addEventListener('mouseover', shadow)