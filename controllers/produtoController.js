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

        const PRODUTOPESQUISADO = await Models.Produto.findAll(
            { 
            where: { 
                nome: { [Op.like]: `%${nomeProduto}%`},
            },
            // include: [
            //         { 
            //             model: Models.Categoria,
            //             as: 'categoria',
            //         }
            //     ]
        })

        
        let verificarLista = Array.isArray(PRODUTOPESQUISADO)

        if(verificarLista == true){

            const categoria = await Models.Categoria.findAll(
                {
                    attributes: ['id', 'descricao']
                }
            )
            let listaResposta = []

             PRODUTOPESQUISADO.map(async x => {

                let objeto = {
                    "id": x.id,
                    "nome": x.nome,
                    "quantidadeCaixa": x.quantidadeCaixa,
                    "precoUnidade": x.precoUnidade,
                    "quantidadeAtual": x.quantidadeAtual,
                    "codigo": x.codigo,
                    "precoVenda": x.precoVenda,
                    "margem": x.margem,
                    "icms": x.icms,
                    "imagem": x.imagem,
                    "createdAt": x.createdAt,
                    "updatedAt": x.updatedAt,
                    "categoria": categoria[x.categoriaId -1]
                }

                listaResposta.push(objeto)
        })

        res.status(200).json({ data: {
            resposta: listaResposta
        }});

        } else {

            const categoria = await Models.Categoria.findAll(
                {
                    where: {
                        id: PRODUTOPESQUISADO.categoriaId
                    },
                    attributes: ['id', 'descricao']
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
}