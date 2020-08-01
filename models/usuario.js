module.exports = function (sequelize, DataTypes) {
    const Usuario = sequelize.define(
        'Usuarios',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                comment: 'null',
                autoIncrement: true,
            },
            nome: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: 'null'
            },
            senha: {
                type: DataTypes.STRING(20),
                allowNull: false,
                comment: 'null'
            },
            tipo: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                comment: 'null',  
            },
        },
        {
            tableName: 'usuarios'
        }
    );

    return Usuario;
};