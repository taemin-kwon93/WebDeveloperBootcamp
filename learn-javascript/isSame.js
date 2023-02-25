const isSame = (x, y) => {
  const anser = x == y
  console.log(anser)
}

const isSameStrictMode = (x, y) => {
  const anser = x === y
  console.log(anser)
}

isSame(1, 1); // true
isSame(1, 2); // false
isSame('1', 1); // true
isSameStrictMode('1', 1); // false
