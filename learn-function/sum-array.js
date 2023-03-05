const sumArray = ([...numbers]) => {
  console.log('log: ', [...numbers]);
  let result = 0;
  for (i of numbers) {
    result += i;
  }
  console.log(result)
}

sumArray([10, 10, 10])