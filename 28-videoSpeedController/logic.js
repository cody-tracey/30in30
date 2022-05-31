(() => {
    const speed = document.querySelector('.speed'),
        bar = speed.querySelector('.speed-bar'),
        video = document.querySelector('.flex');

    function handleMove(e) {
        const y = e.pageY - this.ofsetTop,
            percent = y / this.ofsetHeight,
            min = .4,
            max = 4,
            height = Math.round(percent * 100) + '%',
            playbackRate = percent * (max - min) + min;

        bar.style.height = height;
        bar.textContent = playbackRate.toFixed(2) + 'x';
        video.playbackRate = playbackRate;
    };
    speed.addEventListener('mouseover', handleMove);
})();


