const Models = require('../models');
const sequelize = require('sequelize');
const { consultar } = require('./produtoController');
const Op = sequelize.Op;


module.exports = {

    save: async(req, res, next) => {
        try {
            
            const { descricao } = req.body

            const EXISTS = await Models.TipoCliente.findOne({where: {descricao} })

            if(EXISTS == null) {
                let objeto = { descricao }

                const SALVANDOTIPOCLIENTE = await Models.TipoCliente.create(objeto)
                res.status(200).json({ data: {
                    resposta: SALVANDOTIPOCLIENTE,
                }});
            } else {
                res.status(200).json({ data: {
                    resposta: 'Não é possivel cadastrar um tipo cliente existente',
                }});
            }

        } catch (e) {
            console.log(e)
        }
    }
}