const Router = require('express')
const postController = require('../controllers/postController')
const checkRole = require('../middeware/checkRole')

const router = new Router ()

router.post('/', postController.create)
router.get('/', postController.getAll)
router.delete('/',checkRole( 'ADMIN'), postController.delete)
router.get('/:id', postController.getOne)


module.exports = router