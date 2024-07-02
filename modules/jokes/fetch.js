export async function getJoke() {
  const fetchJoke = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
        }
      })
  console.log(fetchJoke)

  const data = await fetchJoke.json()
  console.log(data)
  return data
}
