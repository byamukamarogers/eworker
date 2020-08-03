module.exports = function (sequelize, DataTypes) {
    var Job = sequelize.define('Job', {
        jobId: {
            type: DataTypes.INTEGER,
            field: 'programid',
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
        jobCategoryId: {
            type: DataTypes.INTEGER,
            field: 'jobcategoryid'
        },
        postedBy: {
            type: DataTypes.INTEGER,
            field: 'employerid'
        },
        isApproved: {
            type: DataTypes.BOOLEAN,
            field: 'staffid',
            defaultValue: false
        },
        approvedBy: {
            type: DataTypes.INTEGER,
            field: 'staffid'
        },
        datePosted:{
            type: DataTypes.DATE,
            field:'dateposted'
        },
        expiryDate:{
            type: DataTypes.DATE,
            field:'expirydate'
        }
    }, {
        tableName: 'jobs',
        underscored: true,
        timestamps: true,
    })
    return Job;
}