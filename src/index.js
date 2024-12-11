function displayRecipe(response) {

new Typewriter("#recipe", {
  strings: response.data.answer,
  autoStart: true,
  delay: 2,
  cursor: "",
});
}


function generateRecipe(event) {
  event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "dac27f8d3491eb544bc74fd800f1to5c";
let context = 
"You are a world renowned pastry chef. Your mission is to generate a clear and simple recipe using HTML format and separate each line with <br />. Make sure to follow user instuctions. Sign recipe with 'SheCodes AI' inside a <strong></strong> element at the end and not at the beginning. Do not include title.";
let prompt = `User instructions: Generate a dessert recipe about ${instructionsInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let recipeElement = document.querySelector("#recipe");
recipeElement.classList.remove("hidden")
recipeElement.innerHTML = `<div class="generating">⏳ Generating your dessert recipe...</div>`;


axios.get(apiUrl).then(displayRecipe);
  

}


let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);


