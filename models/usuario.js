const Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
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
                type: DataTypes.DATE, 
                allowNull: true,
                comment: 'null'
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
                comment: 'null'
            }
        },
        {
            tableName: 'usuarios',
            timestamps: true,
        }
    );

    return usuario;
};

module.exports = Usuario;