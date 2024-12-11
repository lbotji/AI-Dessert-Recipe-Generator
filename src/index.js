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

let instructionInputElement = document.querySelector("#user-instuctions");
let apiKey = "dac27f8d3491eb544bc74fd800f1to5c";
let prompt = `User instuctions: Generate a dessert recipe about ${instructionInput.value}`;
let context = 
"You are a world renowned pastry chef. Your mission is to generate a clear and simple recipe in HTML format and separate each line with <br />. Make sure to follow user instuctions. Sign recipe with 'SheCodes AI' inside a <strong></strong> element at the end and not at the beginning. Do not include title.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl).then(displayRecipe);
  

}


let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);


