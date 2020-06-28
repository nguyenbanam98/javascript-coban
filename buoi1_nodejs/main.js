const express = require('express')
const app = express()
const path = require('path')
const router = require('./router')
const bodyParser = require('body-parser')
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    let login = path.join(__dirname, 'public/index.html');
    res.sendFile(login)
})
app.get('/home', function (req, res) {
    let home = path.join(__dirname, 'public/home.html');
    res.sendFile(home)
})

app.use('/truyen', router)

app.listen(port, () => console.log('Start server'))