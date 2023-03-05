const lastElement = (...someNumbers) => {
  const result = someNumbers[someNumbers.length - 1];
  return result? result : null;
}

lastElement(1, 2, 3, 4)