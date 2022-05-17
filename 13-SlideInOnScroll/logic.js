(() => {
    const img = document.querySelectorAll('.slide-in');

    const debounce = (func, wait = 20, immediate = true) => {
        let timeout;

        return (...args) => {
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(this, args);
            };

            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(this, args);
        };
    };

    const checkSlide = debounce(() => {
        img.forEach(i => {
            const slideIn = (window.scrollY + window.innerHeight) - i.height / 2,
                  imgBttm = i.offsetTop + i.height,
                  isHalfShown = slideIn > i.offsetTop,
                  isinView = window.screenY < imgBttm;

            (isHalfShown && isinView) ? i.classList.add('active') : i.classList.remove('active');
        })
    })

    window.addEventListener('scroll', checkSlide);
})();



