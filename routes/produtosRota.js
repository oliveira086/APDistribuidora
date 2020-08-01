const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController')

router.post('/cadastrar', produtoController.save)
router.get('/pesquisar/:nome', produtoController.consultar)

module.exports = router