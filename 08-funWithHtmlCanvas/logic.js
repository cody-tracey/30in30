const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let x = {
    last: 0,
};
let y = {
    last: 0,
};

let hue = 0;
let direction = true;


const draw = e => {
    if (!isDrawing) return;
    ctx.strokeStyle =`hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(x.last, y.last);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [x.last, y.last] = [e.offsetX, e.offsetY];
    hue++;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {direction = !direction};
    direction ? ctx.lineWidth++ :ctx.lineWidth-- ;
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    [x.last, y.last] = [e.offsetX, e.offsetY];
    isDrawing = true
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);



