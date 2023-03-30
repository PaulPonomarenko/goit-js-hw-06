const itemsEl = document.querySelectorAll(".item");
itemsEl.forEach((el) => {
  console.log(el.firstElementChild.textContent);
  console.log(el.lastElementChild.children.length);
});
