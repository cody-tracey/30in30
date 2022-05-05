const player = document.querySelector('.player'),
    media = player.querySelector('video'),
    vol = player.querySelector('input[name="volume"]'),
    playbttn = player.querySelector('.player__button'),
    toggle = player.querySelector('.toggle'),
    progress = player.querySelector('.progress'),
    buttons = player.querySelectorAll('button'),
    playback = player.querySelector('input[name="playbackRate"]'),
    selectors = player.querySelectorAll('.player__slider')




const playPause = () => {
    if (media.paused) {
        toggle.textContent = '❚ ❚';
        media.play();
    }
    else {
        toggle.textContent = '►';
        media.pause()
    };
}

playbttn.addEventListener('click', playPause);
selectors.forEach(i => addEventListener('click', (e) => {
    i.addEventListener('change', () => media[i.name] = i.value)
    i.addEventListener('mousemove', () => media[i.name] = i.value)
}));
buttons.forEach(i => i.addEventListener('click', () => {
    media.currentTime += parseFloat(i.dataset.skip)
}))



