// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body
// на случайное значение из массива используя инлайн - стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так,
// чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов),
// используй функцию randomIntegerFromInterval.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let timerID = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function getColor() {
  const num = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = colors[num];
}

function setColor(e) {
  e.target.setAttribute('disabled', true);
  timerID = setInterval(getColor, 1000);
  getColor();
}

refs.startBtn.addEventListener('click', setColor);

function removeColor() {
  refs.startBtn.removeAttribute('disabled');
  clearInterval(timerID);
}

refs.stopBtn.addEventListener('click', removeColor);

