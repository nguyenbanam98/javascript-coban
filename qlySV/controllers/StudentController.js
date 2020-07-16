const Student = require('../models/Student.model')

// Get all Student
const getAllStudent = async (req, res, next) => {

    const student = await Student.find({})
    return res.status(200).json(student)
}
// Get Student
const getStudent = async (req, res, next) => {
    const { studentID } = req.params 
    const student = await Student.findById(studentID)
    return res.status(200).json(student)
}

// Create Student
const addStudent = async (req, res, next) => {
    const newStudent = new Student(req.body)
    await newStudent.save()
    return res.status(201).json(newStudent)
}

// Update Student 
const updateStudent = async (req, res, next) => {

    const { studentID } = req.params
    const newStudent = req.body
    await Student.findByIdAndUpdate(studentID, newStudent)
    return res.status(200).json({success: true})
}

// Delete Student 
const deleteStudent = async (req, res, next) => {
    const { studentID } = req.params 
    await Student.deleteOne({_id: studentID})
    return res.status(200).json({success: true})
}
// // Pagination Student
// const paginationStudent = async (req, res, next) => {
    
//     const PAGE_SIZE = 2;
//     let page = +req.query.page || 1;
//     if (page < 1) page = 1
//     const SKIP = (page - 1) * PAGE_SIZE;
//     const students = await Student.find({})
//      .skip(SKIP)
//      .limit(PAGE_SIZE)
//     return res.status(200).json(students)   
// }

module.exports = {
    addStudent,
    getAllStudent,
    getStudent,
    deleteStudent,
    updateStudent
}