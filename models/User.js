module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            field: 'userid',
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(50),
            field: 'firstname',
        },
        lastName: {
            type: DataTypes.STRING(50),
            field: 'lastname',
        },
        telephone: {
            type: DataTypes.STRING(15),
            field: 'telephone'
        },
        address: {
            type: DataTypes.STRING(100),
            field: 'address'
        },
        accountTypeId:{
            type: DataTypes.INTEGER,
            field: 'accounttypeid'

        },
        email: {
            type: DataTypes.STRING(50),
            field: 'email'
        },
        password: {
            type: DataTypes.TEXT,
            field: 'password'
        },
        addedBy: {
            type: DataTypes.INTEGER,
            field: 'staffid'

        }
    }, {
        tableName: 'users',
        underscored: true,
        timestamps: true,

    })
    return User;
}