const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/login', usuarioController.consultar)

module.exports = router