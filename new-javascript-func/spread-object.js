const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];
console.log(allPets); // [ 'Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt' ]

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

let catDog = {...feline, ...canine}
console.log(catDog) // { legs: 4, family: 'Caninae', isFurry: true }

catDog = {...canine, ...feline}
console.log(catDog) // { isFurry: true, family: 'Felidae', legs: 4 }

console.log({...[1,2,3]})
/**
 * 배열의 인덱스를 키로 사용해서 객체를 만든다.
 * {
 *   '0': 1,
 *   '1': 2,
 *   '2': 3,
 * }
 */

const dataFromForm = {
  email: 'blueman@gmail.com',
  password: 'pass0123!',
  userName: 'kwon',
}

const newUser = {...dataFromForm, id: 2345, isAdmin: false}