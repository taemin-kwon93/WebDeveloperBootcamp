const PersonA = {
  age: '23',
  name: 'john'
}
const PersonB = {
  age: '33',
  name: 'kim'
}
const People = [ PersonA, PersonB ]

const fakeRequest = (url) => {
  console.log('fakeRequest')
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
      console.log(`${url} set time out`)
      randomNumber < 0.7? resolve(People) : reject('rejected');
    }, 3000)
  })
}
//
// const makeTwoRequests = async () => {
//   try {
//     await fakeRequest('/dogs/1')
//       .then((data) => {
//         console.log('resolved')
//         console.log('data:', data)
//       })
//       .catch((err) => {
//         console.log('rejected')
//         console.log('rejected err message:', err)
//       })
//   } catch (e) {
//
//   }
// };
//
// makeTwoRequests();
