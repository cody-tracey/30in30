(() => {
    const links = [...document.querySelectorAll('a')],
        highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);

    function highlighter(){
        
        const linkcoords = this.getBoundingClientRect();

        const cords = {
            width: linkcoords.width,
            height: linkcoords.height,
            top: linkcoords.top + window.scrollY,
            left: linkcoords.left + window.scrollX,
        };
console.log(highlight)
        highlight.style.width = `${cords.width}px`;
        highlight.style.height = `${cords.height}px`;
        highlight.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
    };

    links.forEach(i => i.addEventListener('mouseenter', highlighter));
 
})();

