module.exports = function (sequelize, DataTypes) {
    const Categoria= sequelize.define(
        'categoria',
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

    return Categoria;
};