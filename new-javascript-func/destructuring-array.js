const numbers = [2, 3, 6, 15, 17, 78, 21, 1, 203, 0, 8, 10, 105]
numbers.sort((a, b) => {
  return a - b;
})
console.log(numbers)

const [first, second, third, ...restThings ] = numbers
console.log('first: ', first)
console.log('second: ', second)
console.log('third: ', third)
console.log('restThings: ', restThings)
console.log('restThings: ', ...restThings)
