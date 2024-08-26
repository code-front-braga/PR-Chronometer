"use strict";
const watch = document.querySelector('.watch');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
let SECONDS = 0;
let TIMER;
const getTimeFromSeconds = seconds => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT',
    });
};
const startWatch = () => {
    TIMER = setInterval(() => {
        SECONDS++;
        watch.innerHTML = getTimeFromSeconds(SECONDS);
    }, 1000);
};
startButton.addEventListener('click', () => {
    colorBlack();
    clearInterval(TIMER);
    startWatch();
});
pauseButton.addEventListener('click', () => {
    colorGreenWhenPaused();
    clearInterval(TIMER);
});
resetButton.addEventListener('click', () => {
    colorRedWhenReset();
    clearInterval(TIMER);
    watch.innerHTML = '00:00:00';
    SECONDS = 0;
});
