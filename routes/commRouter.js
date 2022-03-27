const Router = require('express')
const commentController = require('../controllers/commentController')
const checkRole = require("../middeware/checkRole");

const router = new Router ()

router.post('/',checkRole('USER' || 'ADMIN'), commentController.create)
router.get('/', commentController.getOne)
router.delete('/',checkRole('USER' || 'ADMIN'), commentController.delete)


module.exports = router