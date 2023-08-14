const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.get('/api/sign', (req, res) => {
  res.send('Hello World this is sign up')
})
app.get('/api/v1', (req, res) => {
  res.send('Hello World this is viesion 1')
})
app.get('/api/v2', (req, res) => {
  res.send('Hello World this version 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

