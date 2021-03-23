const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index')
const PlayerController = require('../controllers/PlayerController')


router.route('/sever/status').get(IndexController.getSeverStatus)

router.route('/player/create').post(PlayerController.createPlayer)

module.exports = router