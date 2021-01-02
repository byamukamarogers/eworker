module.exports = function (sequelize, DataTypes) {
    var JobCategory = sequelize.define('JobCategory', {
        jobCategoryId: {
            type: DataTypes.INTEGER,
            field: 'jobcategoryid',
            primaryKey: true,
            autoIncrement: true
        },
        jobCategoryName: {
            type: DataTypes.STRING(50),
            field: 'jobcategoryname',
            allowNull: false
        },
        jobCategoryDescription: {
            type: DataTypes.TEXT,
            field: 'jobcategorydescription'
        }
    }, {
        tableName: 'jobcategory',
        underscored: true,
        timestamps: true,
    })
    return JobCategory;
}