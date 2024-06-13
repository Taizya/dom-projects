import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome to DOM-projects</h1>
    <div class="card">
      <button id="counter-button" type="button">Counter</button>
    </div>
  </div>
`

const counterButton = document.querySelector('#counter-button')

counterButton.addEventListener('click', () => {
  counterButton.remove()
  setupCounter(document.querySelector('div'))
})
