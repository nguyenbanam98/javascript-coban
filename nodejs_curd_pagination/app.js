const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./router/account')
const AccountModel = require('./models/Account.model')

const app = express()

// connecting to mongo
mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// get user
const PAGE_SIZE = 2;

app.get('/user', (req, res) => {
    // get page
    let page = +req.query.page || 1;
    if (page < 1) page = 1
    const SKIP = (page - 1) * PAGE_SIZE;
    AccountModel.find({})
     .skip(SKIP)
     .limit(PAGE_SIZE)
     .then(data => {
        res.json(data)
     })
    .catch(err => res.status(500).json('Loi server'))
})
// routing
app.use('/api/account', router)

app.listen(3000, () => console.log('Start server'))