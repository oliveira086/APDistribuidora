const Models = require('../models');
const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const Op = sequelize.Op;


module.exports = {

    save: async (req, res, next) => {

        try{
            
            const {
                nome,
                quantidadeCaixa,
                precoUnidade, codigo, 
                precoVenda, margem, icms, imagem, categoriaId
            } = req.body

            const EXISTS = await Models.Produto.findOne({ where: {codigo}, attributes: ['nome']})

            if ( EXISTS == null) {

                let objeto = {
                    nome,
                    quantidadeCaixa,
                    precoUnidade,
                    codigo,
                    precoVenda,
                    margem,
                    icms,
                    imagem,
                    quantidadeAtual: 0,
                    categoriaId: categoriaId
                }

                const CADASTRARPRODUTO = await Models.Produto.create(objeto)

                res.status(200).json({ data: {
                    resposta: "Produto cadastrado", CADASTRARPRODUTO
                }});


            } else {
                res.status(200).json({ data: {
                    resposta: "Produto já existe",
                }});
            }
            
        } catch (e) {
            console.log(e)
        }
    },
    consultar: async (req, res, next) => {

        let nomeProduto = req.params.nome

        const PRODUTOPESQUISADO = await Models.Produto.findOne(
            { 
                where: { 
                    nome: { [Op.like]: `%${nomeProduto}%`},
                },
                
                // include: [
                //     { 
                //         model: Models.Categoria,
                //         as: 'categoria',
                //     }
                // ]
            } 
        )

        const categoria = await Models.Categoria.findOne(
            {
                where: {
                    id: PRODUTOPESQUISADO.categoriaId
                }
            }
        )

        
            let objeto = {
                "id": PRODUTOPESQUISADO.id,
                "nome": PRODUTOPESQUISADO.nome,
                "quantidadeCaiPRODUTOPESQUISADOa": PRODUTOPESQUISADO.quantidadeCaiPRODUTOPESQUISADOa,
                "precoUnidade": PRODUTOPESQUISADO.precoUnidade,
                "quantidadeAtual": PRODUTOPESQUISADO.quantidadeAtual,
                "codigo": PRODUTOPESQUISADO.codigo,
                "precoVenda": PRODUTOPESQUISADO.precoVenda,
                "margem": PRODUTOPESQUISADO.margem,
                "icms": PRODUTOPESQUISADO.icms,
                "imagem": PRODUTOPESQUISADO.imagem,
                "createdAt": PRODUTOPESQUISADO.createdAt,
                "updatedAt": PRODUTOPESQUISADO.updatedAt,
                categoria
            }
            
            res.status(200).json({ data: {
                resposta: objeto
            }});

        
    }
}