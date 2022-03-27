const Router = require('express')
const likeController = require('../controllers/likeController')
const checkRole = require("../middeware/checkRole");

const router = new Router ()

router.post('/',checkRole('USER', 'ADMIN'),likeController.create)
router.get('/', likeController.getAll)
router.delete('/', likeController.delete)


module.exports = router