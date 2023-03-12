const user = {
  firstName: 'kwon',
  lastName: 'Tom',
  age: 29,
  location: 'Seoul',
}

function fullName ({firstName, lastName}) {
  return `${firstName} ${lastName}`
}
console.log(fullName(user))
