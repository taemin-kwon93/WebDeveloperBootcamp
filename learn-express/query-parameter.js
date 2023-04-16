const express = require("express")
const app = express()

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000!')
})

app.get('/search', (req, res) => {
  console.log(req.query)
  console.log('------------------ test ------------------')
})

app.get('*', (req, res) => {
  res.send(`I don't know that route`)
})

