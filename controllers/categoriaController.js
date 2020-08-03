const Models = require('../models');
const sequelize = require('sequelize');
const { consultar } = require('./produtoController');
const Op = sequelize.Op;

module.exports = {

    save: async(req, res, next) => {

        try{
            const { descricao } = req.body

            const EXISTS = await Models.Categoria.findOne({where: {descricao} })

            if(EXISTS == null) {

                let objeto = { descricao }

                const SALVANDOCATEGORIA = await Models.Categoria.create(objeto)
                res.status(200).json({ data: {
                    resposta: SALVANDOCATEGORIA,
                }});
            }
            else {
                res.status(200).json({ data: {
                    resposta: 'Não é possivel cadastrar uma categoria existente',
                }});
            }

        } catch(e){
            console.log(e)
        }
    },

    consultar: async(req, res, next) => {
        
        const { descricao } = req.body;

        const CATEGORIAPESQUISADA = await Models.Categoria.findOne({where: {
            descricao: { [Op.like]: `%${descricao}%`}
        } })

        if(CATEGORIAPESQUISADA == null) {
            res.status(200).json({ data: {
                resposta: 'Categoria não encontrada',
            }});
        } else {
            res.status(200).json({ data: {
                resposta: CATEGORIAPESQUISADA,
            }});
        } 
    },

    listar: async(req, res, next) => {

        const CATEGORIALISTADAS = await Models.Categoria.findAll()

        res.status(200).json({  data: {
            resposta: CATEGORIALISTADAS
        }})

    }
}