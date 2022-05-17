(() => {
    let pressed = [], code = 'helloworld';

    window.addEventListener('keyup', e => {

        pressed.push(e.key)

        if (pressed.join('').includes(code)) {
            console.warn('You are dangerously close to unlocking the forbidden knowledge....');
            cornify_add();
            pressed = [];
        };

    });
})();