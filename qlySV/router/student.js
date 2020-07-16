const router = require("express-promise-router")()

const StudentController = require('../controllers/StudentController')

router.route('/')
    .get(StudentController.getAllStudent)
    .post(StudentController.addStudent)
    
router.route('/:studentID')
    .get(StudentController.getStudent)
    .put(StudentController.updateStudent)
    .delete(StudentController.deleteStudent)



module.exports = router