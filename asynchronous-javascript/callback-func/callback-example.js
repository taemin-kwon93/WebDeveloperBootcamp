const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  console.log('delay: ',delay)
  setTimeout(() => {
    if(delay > 4000) {
      failure('Connection Timeout')
    } else {
      success(`Here is your fake data from ${url}`)
    }
  }, delay)
}

fakeRequestCallback('http://test.com', function() {
  console.log('success')
}, function() {
  console.log('failure')
})