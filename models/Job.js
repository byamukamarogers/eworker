module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define('Job', {
        jobId: {
            type: DataTypes.INTEGER,
            field: 'jobid',
            primaryKey: true,
            autoIncrement: true
        },
        jobName: {
            type: DataTypes.STRING(50),
            field: 'jobname',
            allowNull: false
        },
        jobDescription: {
            type: DataTypes.TEXT,
            field: 'jobdescription'
        },
        JobTypeId: {
            type: DataTypes.INTEGER,
            field: 'jobtypeid'
        },
        employerId: {
            type: DataTypes.INTEGER,
            field: 'employerid'
        },
        isApproved: {
            type: DataTypes.BOOLEAN,
            field: 'isapproved',
            defaultValue: false
        },
        approvedBy: {
            type: DataTypes.INTEGER,
            field: 'staffid'
        },
        datePosted:{
            type: DataTypes.DATE,
            field:'dateposted',
            defaultValue: new Date()
        },
        expiryDate:{
            type: DataTypes.DATE,
            field:'expirydate',
            allowNull: false
        }
    }, {
        tableName: 'jobs',
        underscored: true,
        timestamps: true,
    })
    return Job;
}