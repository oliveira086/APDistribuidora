module.exports = function (sequelize, DataTypes) {
    const ProdutosVenda = sequelize.define(
        'ProdutosVenda',
        {
            quantidade: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                comment: 'null'
            },
        },
        {
            tableName: 'produtosVenda'
        }
    );

    return ProdutosVenda;
};