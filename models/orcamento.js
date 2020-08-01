module.exports = function (sequelize, DataTypes) {
    const Orcamento= sequelize.define(
        'Orcamento',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                comment: 'null',
                autoIncrement: true,
            },
            ativo: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                comment: 'null',  
            },
        },
        {
            tableName: 'orcamento'
        }
    );

    return Orcamento
};