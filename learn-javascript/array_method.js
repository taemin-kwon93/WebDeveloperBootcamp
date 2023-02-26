const arr1 = ['1', '2'];
arr1.push('3');
console.log(arr1); //[ '1', '2', '3' ]

console.log(arr1.pop()); // 3
console.log(arr1); // [ '1', '2' ]

const arr2 = ['2', '3', '4'];
arr2.unshift('1');
console.log(arr2); // [ '1', '2', '3', '4' ]

console.log(arr2.shift()); // 1
console.log(arr2); // [ '2', '3', '4' ]
