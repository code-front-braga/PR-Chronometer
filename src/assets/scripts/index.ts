const displayChronometer = document.querySelector('.chronometer-content span') as HTMLElement;
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const resetButton = document.querySelector('.reset');

let elapsedSeconds = 0;
let TIMER: ReturnType<typeof setInterval>;

function initChronometer() {
  startChronometer();
  pauseChronometer();
  resetChronometer();
}

function fullTimeReset(elapsedSeconds: number): string {
  const resetMinutesAndSeconds = new Date(elapsedSeconds * 1000);
  const fullTimeFormatted = resetMinutesAndSeconds
    .toLocaleTimeString('pt-br', { hour12: false, timeZone: 'GMT' })
    .split(':')
    .join(' : ');

  return fullTimeFormatted;
}

function updateSeconds() {
  TIMER = setInterval(() => {
    elapsedSeconds++;

    displayChronometer.textContent = fullTimeReset(elapsedSeconds);
  }, 1000);
}

function startChronometer() {
  startButton?.addEventListener('click', () => {
    clearInterval(TIMER);
    updateSeconds();
  });
}

function pauseChronometer() {
  pauseButton?.addEventListener('click', () => {
    clearInterval(TIMER);
  });
}

function resetChronometer() {
  resetButton?.addEventListener('click', () => {
    clearInterval(TIMER);

    displayChronometer.textContent = '00 : 00 : 00';

    elapsedSeconds = 0;
  });
}

initChronometer();
