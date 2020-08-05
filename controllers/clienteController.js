const Models = require('../models');
const sequelize = require('sequelize');
const { or } = require('sequelize');
const Op = sequelize.Op;

module.exports = {

    save: async(req, res, next) => {
        try{

            const { 
                nomeEmpresa, cpd,
                endereco, numero,
                cep, telefone,
                email, nomeComprador,
                tipoCliente, bairro, inscricaoEstadual
            } = req.body

            const EXISTS = await Models.Clientes.findOne({where: {cpd} })

            if(EXISTS == null){

                let objeto = {
                    nomeEmpresa, cpd,
                    endereco, numero,
                    cep, telefone,
                    email, nomeComprador,
                    tipoCliente, bairro,
                    inscricaoEstadual }

                const SALVANDOCLIENTE = await Models.Clientes.create(objeto)

                res.status(200).json({ data: {
                    resposta: SALVANDOCLIENTE,
                }});

            } else{
                res.status(200).json({ data: {
                    resposta: 'O cliente já se encontra cadastrado',
                }});
            }

        } catch (e) {
            console.log(e)
        }
    },
    listar: async(req, res, next) => {

        const { pesquisado } = req.body
        console.log(pesquisado)

        const EMPRESA = await Models.Clientes.findAll(
            {
            where: {
                [Op.or]: [
                    { 
                        nomeEmpresa: {
                            [Op.like]: `%${pesquisado}%`
                        }
                    }, {
                        cpd: {
                            [Op.like]: `%${pesquisado}%`
                        }
                    }]
            },attributes: ['nomeEmpresa', 'cpd']
                
        })

        if(EMPRESA == null){
            res.status(200).json({ data: {
                resposta: 'Empresa não encontrada',
            }});
        } else {

            if(EMPRESA.length == 0){
                res.status(200).json({ data: {
                    resposta: 'Empresa não encontrada',
                }});
            }
            else {
                res.status(200).json({ data: {
                    resposta: EMPRESA,
                }});
            }
            
        }

    }
}