module.exports = function(sequelize, DataTypes) {
    const Entrada = sequelize.define(
        'Entrada',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                comment: 'null',
                autoIncrement: true,
            },
            quantidade: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                comment: 'null'
            },
            produtoId: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                comment: 'null'
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
            usuarioId: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                comment: 'null'
            },
        },
        {
            tableName: 'entradas'
        }
    );

    return Entrada
}