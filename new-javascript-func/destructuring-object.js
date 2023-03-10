const person = {
  firstName: 'Harvey',
  lastName: 'Milk',
  born: '1930',
  died: '1978',
  bio: 'Harvey Bernard Milk was an American politician and the first openly',
  city: 'San Francisco',
  state: 'California'
}

/**
 * person 객체에 있는 born, died property 의 값을
 * born, died 변수로 담는다.
 */
let {born, died} = person;
person.born = '1931'
console.log('born:', born) // born: 1930
console.log('person.born:', person.born) // person.born: 1931
console.log('died:', died) // died: 1978

// born 변수를 birthYear 라는 변수를 선언하여 값을 받는다
const {born: birthYear} = person;
console.log('birthYear:',birthYear) // birthYear: 1931