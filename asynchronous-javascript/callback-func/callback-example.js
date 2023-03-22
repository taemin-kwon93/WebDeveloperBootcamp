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

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (4500)) + 500;
    console.log(delay)
    setTimeout(() => {
      console.log('setTimeout start')
      if(delay > 4000) {
        reject('Connection Timeout')
      } else {
        resolve(`Here is your fake data from ${url}`)
      }
    }, delay)
    console.log('after setTimeout')
  })
}

fakeRequestPromise('test url1')
  .then(() => {
    console.log('test url 1 _ Promise1')
    fakeRequestPromise('test url2')
      .then(() => {
        console.log('test url 2 _ Promise2')
      }).catch(() => {
      console.log("Promise rejected2")
    })
  })
  .catch(() => {
    console.log("Promise rejected1")
  })
