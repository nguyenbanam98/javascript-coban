const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Student = new Schema({
    MaSv: String,
    HoTen: String,
    Email: String,
    SoDt: String
}, {
    collection: 'Student'
});

const StudentModel = mongoose.model('Student', Student);

module.exports = StudentModel




