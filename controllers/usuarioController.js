const Models = require('../models');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = {

    save: async (req, res, next) => {

        try{

            const { nome, senha, tipo } = req.body

            const EXISTS = await Models.Usuario.findOne({ where: {nome}, attributes: ['nome'] })

            if (EXISTS == null) {

                const CRIPTOSENHA = await bcrypt.hashSync(senha, 10)
                
                let objeto = { 
                    nome: nome,
                    senha: CRIPTOSENHA,
                    tipo: tipo,
                }

                const CADASTRANDO = await Models.Usuario.create(objeto)
                
                res.status(200).json({ data: {
                    resposta: "Usuario cadastrado com sucesso", CADASTRANDO
                }});
            } else {
                res.status(200).json({ data: {
                    resposta: "Usuario não pode ser cadastrado ou duplicado"
                }})
            }

        } catch(e) {
            console.log(e)
        }
    },
    
    consultar: async (req, res, next) => {

        try{
            const { nome, senha } = req.body

            const EXISTS = await Models.Usuario.findOne({ where: {nome}, attributes:['nome', 'senha'] })

            if(EXISTS == null){
                res.status(200).json({ data: {
                    resposta: "Usuario não encontrado"
                }})
            } else {

                let verificarSenha = bcrypt.compareSync(senha, EXISTS.senha)
                
                if(EXISTS.nome == nome && verificarSenha == true){
                    res.status(200).json({ data: {
                        resposta: "Usuario logado com sucesso!"
                    }})
                } else {
                    res.status(200).json({ data: {
                        resposta: "Usuario ou senha inseridas incorretamente"
                    }})
                }
            }

        } catch(e) {
            console.log(e)
        }
    }
    

}