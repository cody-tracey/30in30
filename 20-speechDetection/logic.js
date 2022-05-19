(() => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;

    const words = document.querySelector('.words');
    let newPElemen = document.createElement('p');
    words.appendChild(newPElemen);

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
        .map(i => i[0])
        .map(({transcript}) => transcript)
        .join('');

        newPElemen.textContent = transcript;
        if(e.results[0].isFinal){
            newPElemen = document.createElement('p');
            words.appendChild(newPElemen);
        };
    });

    recognition.addEventListener('end',recognition.start)
    recognition.start();
});