module.exports = function (sequelize, DataTypes) {
    var JobType = sequelize.define('JobType', {
        JobTypeId: {
            type: DataTypes.INTEGER,
            field: 'jobtypeid',
            primaryKey: true,
            autoIncrement: true
        },
        JobTypeName: {
            type: DataTypes.STRING(50),
            field: 'jobtypename',
            allowNull: false
        },
        JobTypeDescription: {
            type: DataTypes.TEXT,
            field: 'jobtypedescription'
        },
        minSalary: {
            type: DataTypes.INTEGER,
            field: 'minsalary'
        },
        maxSalary: {
            type: DataTypes.INTEGER,
            field: 'maxsalary'
        },
    }, {
        tableName: 'jobtype',
        underscored: true,
        timestamps: true,
    })
    return JobType;
}