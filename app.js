const express = require('express')
const app = express()
const port = 3000

//middleware with no mount path and execute every request
app.use((req, res, next) => {
  let today = new Date()
  console.log(`${today} | ${req.method} from ${req.originalUrl}`)
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})