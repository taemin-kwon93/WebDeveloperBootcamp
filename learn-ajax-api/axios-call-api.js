const axios = require('axios');

// const dadJoke = async () =>{
//   const config = { headers: {Accept: 'application/json', } }
//   const res = await axios.get("https://icanhazdadjoke.com/", config)
//   console.log('res:',res)
// }
//
// dadJoke();

const getDadJoke = async () => {
  const config = {headers: { Accept: 'application/json'} }
  const res = await axios.get('https://icanhazdadjoke.com/', config)
  return res.data.joke;
}

console.log(getDadJoke())