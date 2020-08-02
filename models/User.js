module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        userId: {
            type: DataTypes.STRING(50),
            field: 'userid',
            primaryKey: true
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
        accountTypeId: {
            type: DataTypes.INTEGER,
            field: 'accounttypeid'

        },
        staffId: {
            type: DataTypes.INTEGER,
            field: 'staffid'
        },
        email: {
            type: DataTypes.STRING(50),
            field: 'email',
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            field: 'password'
        },
        addedBy: {
            type: DataTypes.INTEGER,
            field: 'addedby'

        }
    }, {
        tableName: 'users',
        underscored: true,
        timestamps: true,

    })
    return User;
}