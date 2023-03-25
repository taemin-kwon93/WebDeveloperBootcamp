constreq= new XMLHttpRequest();
consturl= 'https://google.com'

req.onload = function() {
  console.log('IT loaded')
  console.log(this)
}

req.onerror = function() {
  console.log('IT failed to onload')
  console.log(this)
}

req.open('GET', `${url}`)
req.send();