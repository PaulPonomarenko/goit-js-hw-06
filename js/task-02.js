const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const ingredientsArray = ingredients.map((ingredient) => {
  const liItems = document.createElement("li");
  liItems.classList = "item";
  liItems.textContent = ingredient;
  return liItems;
});
ingredientsEl.append(...ingredientsArray);
console.log(ingredientsEl);

// const ingredientsEl = document.querySelector("#ingredients");
// const ingredientArray = [];
// ingredients.forEach((ingredient) => {
//   const liItems = document.createElement("li");
//   liItems.classList = "item";
//   liItems.textContent = ingredient;
//   ingredientArray.push(liItems);
// });
// ingredientsEl.append(...ingredientArray);
// console.log(ingredientsEl);
