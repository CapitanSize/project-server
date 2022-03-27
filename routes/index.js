const Router = require('express')
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')
const typeRouter = require('./typeRouter')
const commRouter = require('./commRouter')

const router = new Router ()

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/type', typeRouter)
router.use('/comment', commRouter)


module.exports = router
