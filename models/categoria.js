"use strict";

module.exports = function (sequelize, DataTypes) {
    const Categoria= sequelize.define(
        'Categoria',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                comment: 'null',
                autoIncrement: true,
            },
            descricao: {
                type: DataTypes.STRING(45),
                allowNull: false,
                comment: 'null'
            },
        },
        {
            tableName: 'categoria'
        }
    );

    // Categoria.associate = (models) => {
    //     Categoria.belongsTo(models.Produto, {as: 'categoria', foreignKey:'categoriaId'});
    // }

    return Categoria;
};