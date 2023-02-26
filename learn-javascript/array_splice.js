const firstNumberArray = ['1', '2', '3', '4', '5', '6'];
console.log('firstNumberArray : ', firstNumberArray); // firstNumberArray :  [ '1', '2', '3', '4', '5', '6' ]

console.log(firstNumberArray.splice(0, 3)); // [ '1', '2', '3' ]
console.log('firstNumberArray : ', firstNumberArray); // firstNumberArray :  [ '4', '5', '6' ]
const secondNumberArray = firstNumberArray.splice(0, 3);

console.log('firstNumberArray : ', firstNumberArray); // firstNumberArray :  []
console.log('secondNumberArray: ', secondNumberArray); // secondNumberArray:  [ '4', '5', '6' ]

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
rainbowColors.splice(5, 2); // delete 2 indexes starting at the fifth index
console.log(rainbowColors); // [ 'red', 'orange', 'yellow', 'green', 'blue' ]

rainbowColors.splice(5, 0, 'indigo', 'violet')
console.log(rainbowColors); // ['red','orange','yellow','green','blue','indigo','violet']

rainbowColors.splice(4, 3);
console.log(rainbowColors); // [ 'red', 'orange', 'yellow', 'green' ]

rainbowColors.splice(2,1, 'test', 'test2', 'test3');
console.log(rainbowColors) // [ 'red', 'orange', 'test', 'test2', 'test3', 'green' ]

const str = 'test test1 test2'
const arr = str.split(' ');
console.log(arr) // [ 'test', 'test1', 'test2' ]