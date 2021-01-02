module.exports = function (sequelize, DataTypes) {
    var Employer = sequelize.define('Employer', {
        employerId: {
            type: DataTypes.INTEGER,
            field: 'employerid',
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(50),
            field: 'firstname',
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(50),
            field: 'lastname',
            allowNull: false
        },
        telephone: {
            type: DataTypes.STRING(15),
            field: 'telephone',
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(100),
            field: 'address'
        },
        accountTypeId: {
            type: DataTypes.INTEGER,
            field: 'accounttypeid',
            allowNull: false,
            defaultValue: 2
            //Employer accoutypeid
        },
        email: {
            type: DataTypes.STRING(50),
            field: 'email',
            unique: true,
            allowNull: false
        },
        addedBy: {
            type: DataTypes.INTEGER,
            field: 'addedby',
            allowNull: true
        }
    }, {
        tableName: 'employers',
        underscored: true,
        timestamps: true

    })
    return Employer;
}