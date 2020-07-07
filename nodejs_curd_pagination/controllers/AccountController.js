const Account = require('../models/Account.model')

// Get all Account
const getAllAccount = async (req, res, next) => {

    const account = await Account.find({})
    return res.status(200).json({account})
}
// Get Account
const getAccount = async (req, res, next) => {
    const { accountID } = req.params 
    const account = await Account.findById(accountID)
    return res.status(200).json({account})
}

// Create Account
const addAccount = async (req, res, next) => {
    const newAccount = new Account(req.body)
    await newAccount.save()
    return res.status(201).json({account: newAccount})
}

// Update Account 
const updateAccount = async (req, res, next) => {

    const { accountID } = req.params
    const newAccount = req.body
    await Account.findByIdAndUpdate(accountID, newAccount)
    return res.status(200).json({success: true})
}
// Delete Account 
const deleteAccount = async (req, res, next) => {
    const { accountID } = req.params 
    await Account.deleteOne({_id: accountID})
    return res.status(200).json({success: true})
}

const paginationAccount = async (req, res, next) => {
    
    const PAGE_SIZE = 2;
    let page = +req.query.page || 1;
    if (page < 1) page = 1
    const SKIP = (page - 1) * PAGE_SIZE;
    const account = await Account.find({})
     .skip(SKIP)
     .limit(PAGE_SIZE)
    return res.status(200).json({account})   
}

module.exports = {
    addAccount,
    getAllAccount,
    getAccount,
    deleteAccount,
    updateAccount,
    paginationAccount
}