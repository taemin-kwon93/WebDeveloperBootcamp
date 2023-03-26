const arr = [1, 2, 3].push(4);
console.log(arr)

const arr2 = [1, 2, 3];
arr2.push(4)
console.log(arr2)

arr2.sing = function() {
  console.log("La La La~")
}
arr2.sing();

console.log(String.prototype)