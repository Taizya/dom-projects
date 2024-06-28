import './style.css'
import { setupCounter } from './counter.js'
import {setupDadJokes} from './jokes.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome to DOM-projects</h1>
    <div class="card">
      <button id="counter-button" type="button">Counter</button>
      <button id="jokes-button" type="button">Dad Jokes</button>
    </div>
  </div>
`

//this code is to remove the existing html and replace it with the counter project html
const counterButton = document.querySelector('#counter-button')

counterButton.addEventListener('click', () => {
  setupCounter(document.querySelector('div'))
})

//this code removes the existing html and replace it with the Dad Jokes project html

const jokesButton = document.querySelector('#jokes-button')

jokesButton.addEventListener('click', () => {
  setupDadJokes(document.querySelector('div'))
})
