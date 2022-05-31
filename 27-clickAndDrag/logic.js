(() => {
    const slider = document.querySelector('.items');
    let isDown = false,
        startX,
        scrollLeft;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return; //Stop the func from running
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft,
            walk = (x - startX) * 3;

        slider.scrollLeft = scrollLeft - walk;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
})();


