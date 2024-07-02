import {getJoke} from "./fetch.js";

export function setupDadJokes(element) {

  element.innerHTML = `
    <div>
    <h1>Dad Jokes</h1>
    <p id=joke-text></p>
    <button id='new-joke-button'>New Joke</button>
    </div>
  `
  const newJokeButton = document.querySelector('#new-joke-button')
  newJokeButton.addEventListener('click', () => {

    getJoke()
      .then((response) => {
        const joke = response.joke 
        document.querySelector('#joke-text').innerHTML = `${joke}`
      })
  })
}
