function isBetweenFiftyHundred(num) {
  return num >= 50 && num <= 100
}

function addNumber(a, b) {
  const num1 = isBetweenFiftyHundred(a)? a : 0
  const num2 = isBetweenFiftyHundred(b)? b : 0
  return num1 + num2;
}

console.log(addNumber(60, 70)) // 130
console.log(addNumber(120, 70)) // 70

/**
 * makeBetweenFunc 함수는 min과 max를 매개변수로 받은 후
 * isBetween 함수를 반환해준다.
 * @param min 최소값
 * @param max 최대값
 * @returns {function(*)} num값을 매개변수로 받고 min과 max 값을 통해 조건을 실행하는 함수
 */
function makeBetweenFunc(min, max) {
  console.log('min & max : ', min, max)
  const isBetween = (num) => {
    console.log('isBetween? num: ', num)
    return (num >= min && num <= max)
  }
  return isBetween
}

isChild = makeBetweenFunc(0, 18);
console.log(isChild(15))
// min & max :  0 18
// isBetween? num:  15
// true

console.log(isChild())
// min & max :  0 18
// isBetween? num:  undefined
// false


function makeBetweenFunc2(min, max) {
  console.log('min & max : ', min, max)
  return function (num) {
    console.log('isBetween? num: ', num)
    return num >= min && num <= max
  }
}

isChild2 = makeBetweenFunc2(0, 18)
console.log(isChild2(13))
// min & max :  0 18
// isBetween? num:  13
// true

isAdult = makeBetweenFunc2(19, 64)
// function isAdult(num) {
//  return num >= 19 && num <= 64
// }
console.log('is adult?', isAdult(20)) // is adult? true
isSenior = makeBetweenFunc2(65, 120)