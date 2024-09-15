"use strict";
const displayChronometer = document.querySelector('.chronometer-content span');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');
let elapsedSeconds = 0;
let timer;
function init() {
    startButton.addEventListener('click', () => start());
    pauseButton.addEventListener('click', () => pause());
    resetButton.addEventListener('click', () => reset());
}
function formatTime(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-br', { hour12: false, timeZone: 'GMT' }).split(':').join(' : ');
}
function updateDisplay() {
    displayChronometer.textContent = formatTime(elapsedSeconds);
}
function start() {
    timer && clearInterval(timer);
    timer = setInterval(() => {
        elapsedSeconds++;
        updateDisplay();
    }, 1000);
}
function pause() {
    timer && clearInterval(timer);
}
function reset() {
    timer && clearInterval(timer);
    elapsedSeconds = 0;
    updateDisplay();
}
init();
