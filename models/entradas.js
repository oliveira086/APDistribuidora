module.exports = function (sequelize, DataTypes) {
    const Entradas = sequelize.define(
        'Entradas',
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
        },
        {
            tableName: 'entradas'
        }
    );

    return Entradas;
};