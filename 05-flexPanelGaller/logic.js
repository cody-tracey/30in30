let panels = document.querySelectorAll('.panel');

function open() {
    this.classList.toggle('open');   
};

function close(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    };
};

panels.forEach(i => {
    i.addEventListener("click", open);
});

panels.forEach(i => {
    i.addEventListener('transitionend', close)
});