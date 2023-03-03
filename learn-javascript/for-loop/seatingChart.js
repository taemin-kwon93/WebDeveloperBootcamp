const seatingChart = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F', 'F2', 'F3'],
  ['G', 'H', 'I'],
]

for(let i = 0; i < seatingChart.length; i++){
  for(let j = 0; j < seatingChart[i].length; j++){
    console.log(seatingChart[i][j]); // A B C D E F F2 F3 G H I
  }
}

console.log('---------------')
console.log(seatingChart[0][0]) // A
console.log(seatingChart[1][0]) // D
console.log(seatingChart[2][0]) // G