(() => {
    let countdown;
    const timeLeft = document.querySelector('.display__time-left'),
        endTime = document.querySelector('.display__end-time'),
        buttons = document.querySelectorAll('[data-time]');

    const timer = seconds => {
        clearInterval(countdown);

        const now = Date.now(),
            then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000);
    };

    const displayTimeLeft = seconds => {
        const minutes = Math.floor(seconds / 60),
            remainderSeconds = seconds % 60,
            display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
        document.title = display;
        timeLeft.textContent = display;
    };

    function displayEndTime(timestamp){
        const end = new Date(timestamp),
            hour = end.getHours(),
            adjustedHour = hour > 12 ? hour - 12 : hour,
            minutes = end.getMinutes();
            
        endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
    };


    function startTimer() {
        const seconds = parseInt(this.dataset.time);
        timer(seconds);
    };

    buttons.forEach(i => i.addEventListener('click', startTimer));
    document.customForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const mins = this.minutes.value;
        timer(mins * 60);
        this.reset()
    });

})();

