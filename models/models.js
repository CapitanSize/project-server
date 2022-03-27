const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    nick: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Post = sequelize.define('post',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, allowNull: false},
    author: {type: DataTypes.STRING}
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Comment = sequelize.define('comment',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comm: {type: DataTypes.STRING, allowNull: false}
})

const Like = sequelize.define('like',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Imagine = sequelize.define('imagine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, defaultValue: 'unknown'}
})

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

User.hasOne(Like)
Like.belongsTo(User)

Post.hasMany(Like)
Like.belongsTo(Post)

Post.hasMany(Comment)
Comment.belongsTo(Post)

Type.hasMany(Post)
Post.belongsTo(Type)

Post.hasMany(Imagine)
Imagine.belongsTo(Post)

module.exports = {
    User, Post, Comment, Imagine, Like, Type
}
