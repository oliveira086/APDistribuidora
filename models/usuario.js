module.exports = function (sequelize, DataTypes) {
    const Usuario = sequelize.define(
        'Usuario',
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
            createdAt: {
                type: Sequelize.STRING(15),
                field: 'created_at',
                allowNull: false,
                comment: 'null'
            },
            updatedAt: {
                type: Sequelize.STRING(15),
                field: 'updated_at',
                allowNull: false,
                comment: 'null'
            }
        },
        {
            tableName: 'usuarios',
            timestamps: true,
        }
    );

    return Usuario;
};