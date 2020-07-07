const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

// connecting to mongo
mongoose.connect('mongodb://localhost/test_mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected database from mongodb.'))
.catch(error => console.error(`❌ Connect database is failed with error which is ${error}`))

// Middlewares
app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server is OK'
    })
})
// routing
const accountRouter = require('./router/account')

app.use('/account', accountRouter)


// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    // response to client
    return res.status(status).json({
        error: {
            message: error.message
        }
    })
})
//start the server

app.listen(3000, () => console.log('Start server'))