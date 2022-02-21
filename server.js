const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

app.use(express.static('views'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/user/loginSuccess', function (req, res) {
  res.sendFile(path.join(__dirname, '/loginSuccess.html'))
})

app.get('/user/loginError', function (req, res) {
  res.sendFile(path.join(__dirname, '/loginError.html'))
})

app.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname, '/register.html'))
})

app.get('/user/chatbox', function (req, res) {
  res.sendFile(path.join(__dirname, '/chatbox.html'))
})

app.get('/forgot', function (req, res) {
  res.sendFile(path.join(__dirname, '/forgot.html'))
})

app.listen(port)
console.log('Server started at http://localhost:' + port)
