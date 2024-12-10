function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#ingredients-methods", {
  strings: "Frozen mixed berry dessert",
  autoStart: true,
  delay: 2,
  cursor: "",
});

}



let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);