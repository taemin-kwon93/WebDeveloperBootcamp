const testScore = {
  a: 80,
  b: 70,
  c: 60,
  d: 50,
  e: 40,
  f: 30,
  g: 20,
  h: 10,
  i: 5,
  j: 0,
}

for (let i in testScore) {
  console.log(i)
}
console.log('------------------')

for (let i in testScore) {
  console.log(`${i} : ${testScore[i]}`)
}
console.log('------------------')

console.log(Object.keys(testScore))
console.log(Object.values(testScore))
console.log(Object.entries(testScore))

/** console.log
 * console.log(Object.keys(testScore))
 * [
 *   'a', 'b', 'c', 'd',
 *   'e', 'f', 'g', 'h',
 *   'i', 'j'
 * ]
 *
 * console.log(Object.values(testScore))
 * [
 *   80, 70, 60, 50, 40,
 *   30, 20, 10,  5,  0
 * ]
 *
 * console.log(Object.entries(testScore))
 * [
 *   [ 'a', 80 ], [ 'b', 70 ],
 *   [ 'c', 60 ], [ 'd', 50 ],
 *   [ 'e', 40 ], [ 'f', 30 ],
 *   [ 'g', 20 ], [ 'h', 10 ],
 *   [ 'i', 5 ],  [ 'j', 0 ]
 * ]
 */

console.log('------------------------')
console.log(Object.values(testScore))
let total = 0;
for (let score of Object.values(testScore)) {
  total += score;
}
console.log(total) // 365