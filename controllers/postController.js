const {Post} = require("../models/models");
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class PostController {
    async create(req, res, next) {
        try {
            const {title, content, rating, typeId, userId, author} = req.body
            /*const {imagine} = req.files
            let fileName = uuid.v4() + ".jpg"
            imagine.mv(path.resolve(__dirname, '..', 'static', fileName))*/
            const post = await Post.create({
                title, content, rating, typeId, userId, author
            })
            return res.json(post)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }


    async getAll(req, res) {
        let {typeId, userId} = req.query
        let posts
        if (typeId) {
            posts = await Post.findAll({where: {typeId}})
        }
        if (userId) {
            posts = await Post.findAll({where: {userId}})
        }
        if (!typeId && !userId) {
            posts = await Post.findAll()
        }
        return res.json(posts)
    }

    async getOne(req, res) {
        const {id} = req.params
        const post = await Post.findOne({
            where: {id}
        })
        res.json(post)
    }
    async delete(req, res) {

    }
}

module.exports = new PostController()