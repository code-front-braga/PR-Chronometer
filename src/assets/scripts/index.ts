const displayChronometer = document.querySelector('.chronometer-content span') as HTMLElement;

const startButton = document.querySelector('.start') as HTMLButtonElement;
const pauseButton = document.querySelector('.pause') as HTMLButtonElement;
const resetButton = document.querySelector('.reset') as HTMLButtonElement;

let elapsedSeconds = 0;
let timer: ReturnType<typeof setInterval> | null;

function init() {
  startButton.addEventListener('click', () => start());
  pauseButton.addEventListener('click', () => pause());
  resetButton.addEventListener('click', () => reset());
}

function formatTime(seconds: number): string {
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
