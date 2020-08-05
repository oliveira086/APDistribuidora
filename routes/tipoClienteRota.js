const express = require('express');
const router = express.Router();
const tipoClienteController = require('../controllers/tipoClienteController')

router.post('/cadastrar', tipoClienteController.save)
router.post('/listar', tipoClienteController.listar)

module.exports = router