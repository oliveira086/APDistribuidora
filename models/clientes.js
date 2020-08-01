module.exports = function (sequelize, DataTypes) {
    const Clientes = sequelize.define(
        'Clientes',
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                comment: 'null',
                autoIncrement: true,
            },
            nomeEmpresa: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: 'null'
            },
            cpd: {
                type: DataTypes.STRING(45),
                allowNull: false,
                comment: 'null'
            },
            endereco: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: 'null'
            },
            numero: {
                type: DataTypes.STRING(10),
                allowNull: false,
                comment: 'null'
            },
            cep: {
                type: DataTypes.STRING(10),
                allowNull: false,
                comment: 'null'
            },
            telefone: {
                type: DataTypes.STRING(45),
                allowNull: false,
                comment: 'null'
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false,
                comment: 'null'
            },
            nomeComprador: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: 'null'
            },
        },
        {
            tableName: 'Clientes'
        }
    );
    return Clientes;
}