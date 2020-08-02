module.exports = function (sequelize, DataTypes) {
    var Program = sequelize.define('Program', {
        programId: {
            type: DataTypes.INTEGER,
            field: 'programid',
            primaryKey: true,
            autoIncrement: true

        },
        programName: {
            type: DataTypes.STRING(50),
            field: 'programname',

        },
        programCode: {
            type: DataTypes.STRING(8),
            field: 'programcode'

        },
        departmentId: {
            type: DataTypes.INTEGER,
            field: 'departmentid'

        },
        duration: {
            type: DataTypes.INTEGER,
            field: 'duration'

        }
    }, {
        tableName: 'Programs',
        underscored: true,
        timestamps: true,

    })
    return Program;
}