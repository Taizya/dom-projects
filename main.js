import "./style.css";
import { setupCounter } from "./counter.js";
import { setupDadJokes } from "./jokes.js";
import { setupForms } from "./forms.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Welcome to DOM-projects</h1>
    <div class="card">
      <button id="counter-button" type="button">Counter</button>
      <button id="jokes-button" type="button">Dad Jokes</button>
      <button id="forms-button" type="button">Forms</button>
    </div>
  </div>
`;

const divElement = document.querySelector("div");
//this code is to remove the existing html and replaces it with the counter project html
const counterButton = document.querySelector("#counter-button");

counterButton.addEventListener("click", () => {
  setupCounter(divElement);
});

//this code removes the existing html and replaces it with the Dad Jokes project html
const jokesButton = document.querySelector("#jokes-button");

jokesButton.addEventListener("click", () => {
  setupDadJokes(divElement);
});

//this code removes the existing html and replaces it with the forms project html
const formsButton = document.querySelector("#forms-button");

formsButton.addEventListener("click", () => {
    setupForms(divElement)
})
