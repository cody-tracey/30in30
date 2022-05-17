(() => {
    const sliderImg = document.querySelectorAll('.slide-in');



    const debounce = (func, wait = 20, immediate = true) => {
        let timeout;

        return (...args) => {
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };


})();



