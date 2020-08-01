const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.post('/cadastrar', usuarioController.save)

module.exports = router