let s = document.getElementById('spacing');
let bl = document.getElementById('blur');
let ba = document.getElementById('base');
const r = document.querySelector(':root');

s.oninput = (e) => {
    console.log(e.target.value)
}

bl.oninput = (e) => {
    console.log(e.target.value)
    console.log(r)
}

ba.oninput = (e) => {
    console.log(e.target.value)
}

