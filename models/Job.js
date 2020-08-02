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
        datePosted:{
            type: DataTypes.DATE,
            field:''
        }
    }, {
        tableName: 'jobs',
        underscored: true,
        timestamps: true,
    })
    return Job;
}