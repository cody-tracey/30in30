const player = document.querySelector('.player'),
media = player.querySelector('video'),
vol = player.querySelector('input[name="volume"]'),
playbttn = player.querySelector('.player__button'),
toggle = player.querySelector('.toggle'),
progress = player.querySelector('.progress'),
buttons = player.querySelectorAll('button'),
playback = player.querySelector('input[name="playbackRate"]');




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
vol.addEventListener('click', e => media.volume = e.target.value);
playback.addEventListener('click', e => console.log('play back'));
buttons.forEach(i => i.addEventListener('click', (e) => {
    let num = Number(e.target.attributes[0].value);
    console.log(progress)
}))



