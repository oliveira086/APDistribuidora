module.exports = function (sequelize, DataTypes) {
    const TipoCliente = sequelize.define(
        'TipoCliente',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                comment: 'null',
                autoIncrement: true,
            },
            descricao: {
                type: DataTypes.STRING(40),
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
        },
        {
            tableName: 'tipoCliente'
        }
    );

    return TipoCliente;
};