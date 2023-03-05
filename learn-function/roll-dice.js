const rollDie = () => {
  return Math.floor(Math.random() * 6 + 1);
}

let rollResult = rollDie();
console.log('rollResult: ', rollResult)

console.log(rollDie) // [Function: rollDie]
console.log(rollDie()) // 4

console.log(typeof rollDie) // function
console.log(typeof rollDie()) // number
