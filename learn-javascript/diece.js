// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
const sum = (die1, die2) => {
  console.log(`roll: "You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}"`)
  return `roll: "You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}"`
}

sum(die1, die2);
