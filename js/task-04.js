// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;
const firstValue = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const onRemoveClick = () => {
  counterValue -= 1;
  firstValue.textContent = counterValue;
};
decrementBtn.addEventListener("click", onRemoveClick);

const incrementBtn = document.querySelector('button[data-action="increment"]');
const onAddClick = () => {
  counterValue += 1;
  firstValue.textContent = counterValue;
};
incrementBtn.addEventListener("click", onAddClick);
