(() => {

    const triggers = document.querySelectorAll('.cool > li'),
        background = document.querySelector('.cool > li'),
        nav = document.querySelector('.cool > li');

    function handleEnter() {
        this.classList.add('trigger-enter');
        setTimeout(() => { this.classList.add('trigger-enter-active') }, 150);
    };

    function handleLeave() {

    }

    triggers.forEach(i => i.addEventListener('mouseenter', handleEnter));
    triggers.forEach(i => i.addEventListener('mouseleave', handleLeave));



})();