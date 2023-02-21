const sliceTest = (input) => {
  const message = input.length > 5 ? input.slice(2,4) : '';
  console.log(message);
}
sliceTest('Tom Kwon');

const replaceTest = (input) => {
  const message = input.replace(' ', '');
  console.log(message);
}
replaceTest('Kwon Tom   11');
