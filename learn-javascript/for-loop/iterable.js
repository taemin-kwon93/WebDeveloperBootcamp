const alphabet = ['a','b','c','d'];

for (let character of alphabet) {
  console.log('character: ', character);
}

const seatingChart = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F', 'F2', 'F3'],
  ['G', 'H', 'I'],
]

for(let row of seatingChart) {
  for(let character of row){
    console.log('character: ', character);
  }
}