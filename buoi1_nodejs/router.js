const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('The loai')
})

router.get('/tienhiep/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.query.name)
    res.send('Truyen tien hiep ' + req.params.id + ' ' + req.query.name)
})

router.get('/ngontinh', (req, res) => {
    res.send('Truyen ngon tinh')
})

router.post('/admin', (req, res) => {
    console.log(req.body);
    res.json('admin')
})

module.exports = router