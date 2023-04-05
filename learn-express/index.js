const express = require("express")
const app = express()
// console.dir(app)

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000!')
})

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!!")
//   console.log(req)
  // res.send("HELLO, THIS IS TOM's COMPUTER") // Content-Type: text/html; charset=utf-8
  // res.send({color: 'red'}) // application/json; charset=utf-8
//   res.send("<h1>HELLO, THIS IS TOM's COMPUTER</h1>") // Content-Type: text/html; charset=utf-8
// })

app.get('/cats', (req, res) => {
  console.log('meow')
  res.send("<h1>MEOW</h1>")
})

app.get('/dogs', (req, res) => {
  console.log('bowwow')
  res.send("<h1>bowwow</h1>>")
})

app.post('/cats', (req, res) => {
  console.log('post, /cats')
  res.send('<h1>cats post request</h1>')
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  console.log('subreddit: ', subreddit)
  res.send('This is the home page!')
})

// error page, 위 요청을 제외한 *으로 받는 요청 페이지는 아래의 콜백 함수가 실행된다.
// 아래의 get은 해당 파일에서 상위에 위치할 경우,
// 즉 다른 get 요청을 받는 코드보다 위에 적힐 경우 모든 요청에 대해 실행된다.
app.get('*', (req, res) => {
  res.send(`I don't know that route`)
})
