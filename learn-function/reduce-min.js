const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

/**
 * accumulator
 * The accumulator accumulates callbackFn's return values.
 * It is the accumulated value previously
 * returned in the last invocation of the callback—or
 * initialValue, if it was supplied (see below).
 * @type {number}
 */

let i = 0;
const total = prices.reduce((total, price) => {
  console.log('--- start total ---')
  console.log('count : ', i++)
  console.log('price: ', price)
  console.log('total: ', total)
  console.log('--- end total --- \n')
  return total + price;
})

console.log('function total execute: ', total, '\n\n\n')


let y = 0;
const min = prices.reduce((min, price) => {
  console.log('--- start min ---')
  console.log('count y : ', y++)
  console.log('min1: ', min)
  console.log('price1: ', price)
  if (price < min) {
    console.log('min2: ', min)
    console.log('price2: ', price)
    console.log('--- end min --- \n')
    return price;
  }
  console.log('--- end min --- \n')
  return min;
})
console.log('function min execute: ', min, '\n\n\n')

/** console.log
 *
 * --- start total ---
 * count :  0
 * price:  1.5
 * total:  9.99
 * --- end total ---
 *
 * --- start total ---
 * count :  1
 * price:  19.99
 * total:  11.49
 * --- end total ---
 *
 * --- start total ---
 * count :  2
 * price:  49.99
 * total:  31.479999999999997
 * --- end total ---
 *
 * --- start total ---
 * count :  3
 * price:  30.5
 * total:  81.47
 * --- end total ---
 *
 * function total execute:  111.97
 *
 *
 *
 * --- start min ---
 * count y :  0
 * min1:  9.99
 * price1:  1.5
 * min2:  9.99
 * price2:  1.5
 * --- end min ---
 *
 * --- start min ---
 * count y :  1
 * min1:  1.5
 * price1:  19.99
 * --- end min ---
 *
 * --- start min ---
 * count y :  2
 * min1:  1.5
 * price1:  49.99
 * --- end min ---
 *
 * --- start min ---
 * count y :  3
 * min1:  1.5
 * price1:  30.5
 * --- end min ---
 *
 * function min execute:  1.5
 */