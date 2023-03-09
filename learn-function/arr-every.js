/**
 * every 는 모든 조건이 만족되면 true 를 return 하고
 * 하나의 조건이라도 만족되지 않으면, false 를 return 한다
 * @param numbers
 * @returns true or false
 */
const allEvens = (numbers) => (numbers.every(num => (num % 2 === 0)))
console.log(allEvens([2, 4, 6, 8]))

/**
 * some 은 하나의 조건이라도 해당되면 true 를 return 하고
 * 하나의 조건도 만족하지 못 할 경우, false 를 return 한다
 * @param numbers
 * @returns true or false
 */
const isSomeNumberEvens = (numbers) => (numbers.some(num => num % 2 === 0))
console.log(isSomeNumberEvens([1, 2, 7, 9]))

const isEvens = isSomeNumberEvens([1, 3, 7, 9])
console.log(isEvens)
