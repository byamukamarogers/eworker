module.exports = function (sequelize, DataTypes) {
    var Worker = sequelize.define('Worker', {
        workerId: {
            type: DataTypes.INTEGER,
            field: 'workerid',
            primaryKey: true,
            autoIncrement:true
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
        nationality: {
            type: DataTypes.STRING(100),
            field: 'nationality',
            defaultValue: 'UGA'
        },
        nationalIdNo: {
            type: DataTypes.STRING(100),
            field: 'idnumber'
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
        
        nextOfKin: {
            type: DataTypes.STRING(50),
            field: 'nextofkin'
        },        
        nextOfKinContact: {
            type: DataTypes.STRING(50),
            field: 'nextofkinphone'
        },
        parentName: {
            type: DataTypes.STRING(50),
            field: 'parentname'
        },
        parentPhoneNumber: {
            type: DataTypes.STRING(50),
            field: 'parentphonenumber'
        },
        maritalStatus: {
            type: DataTypes.STRING(30),
            field:'maritalstatus'
        },
        addedBy: {
            type: DataTypes.INTEGER,
            field: 'addedby'
        }
    }, {
        tableName: 'workers',
        underscored: true,
        timestamps: true,

    })
    return Worker;
}