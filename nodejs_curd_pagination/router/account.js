const express = require('express')
const router = express.Router()
const AccountModel = require('../models/Account.model')

//Lay du lieu
router.get('/', (req, res) => {
    AccountModel.find({})
     .then(data => {
         res.json(data)
     })
     .catch(err => res.status(500).json('Loi server'))
})
// Create 
router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    AccountModel.findOne({ username: username })
        .then(data => {
            if (data) {
                res.json('User nay da ton tai')
            } else {
                return AccountModel.create({
                    username: username,
                    password: password
                })
            }
        }
    )
     .then(data => res.json(data))
     .catch(err => res.status(500).json('Dang nhap that bai'))
})
//Update
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const newpassword = req.body.password;
    AccountModel.findByIdAndUpdate(id, {
        password: newpassword
    })
     .then(data => res.json('update thanh cong'))
     .catch(err => res.status(500).json('loi server'))
})
// Delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    AccountModel.deleteOne({_id: id})
     .then(data => res.json(data))
     .catch(err => res.status(500).json('loi server'))
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    AccountModel.findOne({_id: id})
     .then(data => {
         res.json(data)
     })
     .catch(err => res.status(500).json('Loi server'))
})

module.exports = router