import axios from 'axios'

// GOOD PROXY SERVER
const proxy = 'https://cors-anywhere.herokuapp.com/'

export const getSomething = async () => {
  const result = await axios(`${proxy}!!LINK!!`)

  return result.data
}



