const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
let i = 0;
const total1 = prices.reduce((total, price) => {
  console.log('\n count : ', i++)
  console.log('total: ', total)
  console.log('price: ', price)
  /**
   * total:  9.99
   * price:  1.5
   * total:  11.49
   * price:  19.99
   * total:  31.479999999999997
   * price:  49.99
   * total:  81.47
   * price:  30.5
   */
  return total + price;
})
console.log('\n', total1)

const total2 = prices.reduce((total, price) => total + price)
console.log('\n', total2)
