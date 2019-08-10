const express = require('express')
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router()

routes.get('/', (req, res) => { return res.json({ message: `Olá: ${req.query.name}` })})

routes.post('/dev', DevController.store)

routes.get('/dev', DevController.index)

routes.post('/dev/:id/likes', LikeController.store)

routes.post('/dev/:id/dislikes', DislikeController.store)

module.exports = routes

//Mongoose é um ODM  