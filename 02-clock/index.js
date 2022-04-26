"use strict"

const s = document.querySelector('.second-hand');
const m = document.querySelector('.min-hand');
const h = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();
    const sec = ((now.getSeconds() / 60) * 360 + 90) % 360;
    const min = ((now.getMinutes() / 60) * 360 + 90) % 360;
    const hr = ((now.getHours() / 24) * 360 + 90) % 360;

    s.style.transform = `rotate(${sec}deg)`
    m.style.transform = `rotate(${min}deg)`
    h.style.transform = `rotate(${hr}deg)`
};

setInterval(setDate, 1000)