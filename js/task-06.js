const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.dataset.length;

inputEl.addEventListener("blur", onValidChecked);

function onValidChecked(event) {
  const inputLength = event.currentTarget.value.length;
  if (inputLength < dataLength || inputLength > dataLength) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
