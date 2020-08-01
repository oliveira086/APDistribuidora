const Usuario = require('../models/usuario');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = {

    save: async (req, res, next) => {

        // const users = await Usuario.findAll({attributes: ['id', 'nome']})
        // res.status(200).json({"users": users});

        // try{

        //     const { nome, senha, tipo } = req.body

        //     const CRIPTOSENHA = await bcrypt.hashSync(senha, 10);

        //     let objeto = {
        //         nome: nome,
        //         senha: CRIPTOSENHA,
        //         tipo: tipo,
        //     }
        //     console.log(objeto)
            
        //     const CADASTRANDO = await Usuario.create(objeto)
            
        //     res.status(200).json({ data: {
        //         resposta: "Usuario cadastrado com sucesso",
        //         objeto
        //     }});

        // } catch {

        // }
    }

}