const router = require("express-promise-router")();

const AccountController = require('../controllers/AccountController')

router.route('/')
    .get(AccountController.paginationAccount)
    .post(AccountController.addAccount)
    
router.route('/:accountID')
    .get(AccountController.getAccount)
    .patch(AccountController.updateAccount)
    .delete(AccountController.deleteAccount)



module.exports = router