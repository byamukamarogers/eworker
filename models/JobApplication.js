module.exports = function (sequelize, DataTypes) {
    var JobApplication = sequelize.define('JobApplication', {
        jobApplicationId: {
            type: DataTypes.INTEGER,
            field: 'jobapplicationid',
            primaryKey: true,
            autoIncrement: true
        },
        jobId: {
            type: DataTypes.INTEGER,
            field: 'jobid',
            allowNull: false
        },
        workerId: {
            type: DataTypes.INTEGER,
            field: 'workerid',
            allowNull: false
        },
        isApproved: {
            type: DataTypes.BOOLEAN,
            field: 'isapproved',
            defaultValue: false
        },
        dateApplied:{
            type: DataTypes.DATE,
            field:'dateposted',
            defaultValue: new Date()
        }
    }, {
        tableName: 'jobapplications',
        underscored: true,
        timestamps: true,
    })
    return JobApplication;
}