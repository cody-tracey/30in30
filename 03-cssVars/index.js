let s = document.getElementById('spacing');
let bl = document.getElementById('blur');
let ba = document.getElementById('base');
const r = document.querySelector(':root');

s.oninput = (e) => {
    r.style.setProperty('--space', `${e.target.value}px`)
}

bl.oninput = (e) => {
    r.style.setProperty('--blur', `${e.target.value}px`)
}

ba.oninput = (e) => {
    r.style.setProperty('--color', e.target.value)

}

