const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientCreateLi = ingredientsEl => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredientsEl;
  ingredientItem.classList.add('item');
  console.log(ingredientItem);
  return ingredientItem;
};

const ingredientItems = ingredients.map(ingredientCreateLi);

ingredientsList.append(...ingredientItems);
console.log(ingredientItems);
