const evenNumber = () => {
  for(let i=0; i<=20; i++){
    if(i%2 === 0) {
      console.log('i: ', i);
    }
  }
}
const twentyFiveToZero = () => {
  for (let i = 25; i >= 0; i--) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
}
evenNumber();
console.log('--------------')
twentyFiveToZero();
