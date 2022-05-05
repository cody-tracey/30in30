const media = document.querySelector('video');
const playB = document.querySelector('.player__button');



const playPause = () => {
    if(media.paused) media.play();
    else media.pause();
}


playB.addEventListener('click', playPause)