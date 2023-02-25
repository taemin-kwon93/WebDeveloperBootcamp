const makeRandomNumber = () => {
  const randomNumber = Math.random() * 10;
  console.log('randomNumber: ', randomNumber);
  let oneToTen = Math.floor(randomNumber);
  console.log('oneToTen: ', oneToTen);
}

makeRandomNumber();