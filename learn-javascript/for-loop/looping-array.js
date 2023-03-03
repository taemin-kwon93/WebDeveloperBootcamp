const animals = ['lions', 'tigers', 'bears'];

const callAnimals = () => {
  for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
  }
}

callAnimals();
console.log('------------------------')

animals.map(data => {
  console.log(data);
})