(() => {
const player = document.querySelector('.player'),
    media = player.querySelector('video'),
    playbttn = player.querySelector('.player__button'),
    toggle = player.querySelector('.toggle'),
    progress = player.querySelector('.progress'),
    progressBar = player.querySelector('.progress__filled'),
    buttons = player.querySelectorAll('button'),
    selectors = player.querySelectorAll('.player__slider');

const playPause = () => {
    if (media.paused) {
        toggle.textContent = '❚ ❚';
        media.play();
    }
    else {
        toggle.textContent = '►';
        media.pause()
    };
},
    handleProgress = () =>
        progressBar.style.flexBasis = `${media.currentTime / media.duration * 100}%`,
    scrub = (e) => media.currentTime = ((e.offsetX / progress.offsetWidth) * media.duration),
    progressMoved = e => mousedown && scrub(e),
    progressUp = e => mousedown = false,
    progressDown = e => mousedown = true,
    bClick = b => media.currentTime += parseFloat(b.dataset.skip),
    updateRange = (range, e) => media[range.name] = range.value;
let mousedown = false;


const events = [
    { event: 'click', handler: playPause, target: playbttn },
    { event: 'timeupdate', handler: handleProgress, target: media },
    { event: 'click', handler: playPause, target: media },
    { event: 'click', handler: scrub, target: progress },
    { event: "mousedown", handler: progressDown, target: progress },
    { event: "mousemove", handler: progressMoved, target: progress },
    { event: "mouseup", handler: progressUp, target: progress },
    { event: "click", handler: bClick, target: buttons },
    { event: ["change", "mousemove"], handler: updateRange, target: selectors }
];


events.forEach(
    ({ event: e, handler: h, target: t }) =>
      (t instanceof NodeList
        ? t.forEach((el, i) => {
            el.addEventListener(
              typeof e === "string" ? e : e[i],
              typeof h === "function" ? h.bind(null, el) : h[i].bind(null, el)
            );
          })
        : t.addEventListener(e, h))
  );
})();






