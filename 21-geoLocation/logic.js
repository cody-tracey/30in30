const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
    const { speed: dSpeed, heading } = data.coords;
    speed.textContent = dSpeed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, err => {
    console.error(err);
    alert('You must enable this feature')
});
