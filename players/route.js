const express = require('express')
const router = express.Router()
const playerController = require('./controller')

router.get('/players',playerController.getAllPlayers)

module.exports = router