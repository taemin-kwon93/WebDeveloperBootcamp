const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 3)
console.log(result)

function printWords(element) {
  console.log(`${element}1`)
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const evenNumber = (number) => {
  if (number % 2 === 0) {
    console.log(number)
  }
}

console.log('----------start----------')
words.forEach(printWords)
console.log('----------end----------')
/**
 * ----------start----------
 * spray1
 * limit1
 * elite1
 * exuberant1
 * destruction1
 * present1
 * ----------end----------
 */
console.log('----------start----------')
words.forEach(word => printWords(word))
console.log('----------end----------')
/**
 * words 배열에 있는 값들 요소 하나하나를 word로 담는다.
 * printWords 함수가 실행된다 word를 매개변수로 받아 실행된다.
 * ----------start----------
 * spray1
 * limit1
 * elite1
 * exuberant1
 * destruction1
 * present1
 * ----------end----------
 */

console.log('----------start----------')
numbers.forEach(number => evenNumber(number))
console.log('----------end----------')
/**
 * numbers 배열에 있는 값들 요소 하나하나를 number 변수로 담는다.
 * printWords 함수가 실행된다 word를 매개변수로 받아 실행된다.
 * ----------start----------
 * 0
 * 2
 * 4
 * 6
 * 8
 * 10
 * 12
 * 14
 * 16
 * 18
 * 20
 * ----------end----------
 */
console.log('----------start----------')
numbers.forEach(evenNumber)
console.log('----------end----------')
/**
 * ----------start----------
 * 0
 * 2
 * 4
 * 6
 * 8
 * 10
 * 12
 * 14
 * 16
 * 18
 * 20
 * ----------end----------
 */