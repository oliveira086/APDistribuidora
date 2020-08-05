const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController')

router.post('/cadastrar', clienteController.save)
router.post('/listar', clienteController.listar)

module.exports = router