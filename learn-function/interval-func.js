const id = setInterval(() => {
  console.log(Math.random())
}, 2000);

console.log('id: ', id)

setTimeout(() => {
  console.log('clearInterval')
  clearInterval(id)
}, 4500)