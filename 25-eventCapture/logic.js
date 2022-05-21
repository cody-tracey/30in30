const divs = document.querySelectorAll('div');

function logText(e) {
    // e.stopPropagation();
    console.log(this.classList.value)
};

divs.forEach(i => i.addEventListener("click", logText),{once:true});