module.exports = function (sequelize, DataTypes) {
    const Usuario = sequelize.define(
        'Usuarios',
        {
        },
        {
            tableName: 'usuarios'
        }
    );

    return Usuario;
};