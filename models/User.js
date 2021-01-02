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
        email: {
            type: DataTypes.STRING(50),
            field: 'email',
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            field: 'password',
            //123
            defaultValue: '$2b$10$779fao14zR6oifatoRkpYOd4I5aQ1r44bRrjQtyuq9IfekQO1pupu'
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