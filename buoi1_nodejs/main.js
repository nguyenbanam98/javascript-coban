const express = require('express')
const app = express()
const path = require('path')
const port = 3001
 
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function (req, res) {
    let login = path.join(__dirname, 'public/index.html');
    res.sendFile(login)
})
app.get('/home', function (req, res) {
    let home = path.join(__dirname, 'public/home.html');
    res.sendFile(home)
})

 
app.listen(port, () => console.log('Start server'))