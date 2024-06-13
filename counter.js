export function setupCounter(element) {

  let count = 0 
  const updateCounter = (num = 0) => {
    element.innerHTML = `
      <div>
      <h1>Counter</h1>
      <p>The count is ${num}</p>
      <button id='add-button'>plus</button>
      <button id='reset-button'>reset</button>
      <button id='minus-button'>minus</button>
      </div>
    `
    const add = () => {
      return  count += 1 
    }

    const subract = () => {
      return count -= 1
    }

    const reset = () => {
      return count = 0
    }

    const addButton = document.querySelector('#add-button')
    addButton.addEventListener('click', () => {
      let result = add()
      count = result
      updateCounter(count)
    })

    const minusButton = document.querySelector('#minus-button')
    minusButton.addEventListener('click', () => {
      let result = subract()
      count = result
      updateCounter(count)
    })

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', () => {
      let result = reset()
      count = result
      updateCounter(count)
    })

  }

  updateCounter()
}
