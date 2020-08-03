const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController')

router.post('/cadastrar', categoriaController.save)
router.post('/consultar', categoriaController.consultar)

module.exports = router