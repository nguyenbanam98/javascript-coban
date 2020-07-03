const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Account = new Schema({
    username: String,
    password: String
}, {
    collection: 'Account'
});

const AccountModel = mongoose.model('account', Account);

module.exports = AccountModel




