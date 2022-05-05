const media = document.querySelector('video');
const playbttn = document.querySelector('.player__button');
const vol = document.querySelector('input[name="volume"]');
const playback = document.querySelector('input[name="playbackRate"]');
const buttons = document.querySelectorAll('button');






const playPause = () => {
    if(media.paused) media.play();
    else media.pause();
}

playbttn.addEventListener('click',playPause);
vol.addEventListener('click', e => console.log(e.target));
playback.addEventListener('click', e => console.log('play back'));
buttons.forEach(i => i.addEventListener('click', (e) => {
    let num = Number(e.target.attributes[0].value);
}))



