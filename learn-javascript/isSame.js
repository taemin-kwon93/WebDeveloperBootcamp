const isSame = (x, y) => {
  const answer = x == y
  console.log(answer)
}

const isSameStrictMode = (x, y) => {
  const answer = x === y
  console.log(answer)
}

isSame(1, 1); // true
isSame(1, 2); // false
isSame('1', 1); // true
isSameStrictMode('1', 1); // false
