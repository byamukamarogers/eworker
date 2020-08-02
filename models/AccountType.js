module.exports = function (sequelize, DataTypes) {
    var AcountType = sequelize.define('AcountType', {
        accountTypeId: {
            type: DataTypes.INTEGER,
            field: 'accountTypeId',
            primaryKey: true,
            autoIncrement: true

        },
        accountTypeName: {
            type: DataTypes.STRING(50),
            field: 'acounttypename',
            allowNull:false

        },
        description: {
            type: DataTypes.STRING(254),
            field: 'description'
        }
    }, {
        tableName: 'acounttypes',
        underscored: true,
        timestamps: true,

    })
    return AcountType;
}