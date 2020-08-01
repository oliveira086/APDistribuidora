module.exports = function (sequelize, DataTypes) {
    const Vendas = sequelize.define(
        'Vendas',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                comment: 'null',
                autoIncrement: true,
            },
            nfe: {
                type: DataTypes.STRING(250),
                allowNull: false,
                comment: 'null'
            },
        },
        {
            tableName: 'vendas'
        }
    );

    return Vendas;
};