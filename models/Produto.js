"use strict";

module.exports = function (sequelize, DataTypes){
    const Produto = sequelize.define(
        'Produto',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                comment: 'null',
                autoIncrement: true,
            },
            nome:{
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: 'null'
            },
            quantidadeCaixa: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: 'null'
            },
            precoUnidade: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
                comment: 'null'
            },
            quantidadeAtual: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                comment: 'null'
            },
            codigo: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: 'null'
            },
            precoVenda: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
                comment: 'null'
            },
            margem: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
                comment: 'null'
            },
            icms: {
                type: DataTypes.DECIMAL(10,2),
                allowNull: false,
                comment: 'null'
            },
            imagem: {
                type: DataTypes.STRING(200),
                allowNull: true,
                comment: 'sem imagem'
            },
            createdAt: {
                type: DataTypes.DATE, 
                allowNull: true,
                comment: 'null'
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                comment: 'null'
            },
            categoriaId: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                comment: 'null',
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        },

        {
            tableName: 'produtos',
            timestamps: true,
        }
    );
    
    Produto.associate = (models) => {
        Produto.hasMany(models.Categoria, {as: 'categoria', foreignKey:'id'})
    }

    return Produto;
}