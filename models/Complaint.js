module.exports = function (sequelize, DataTypes) {
    var Complaint = sequelize.define('Complaint', {
        complaintId: {
            type: DataTypes.INTEGER,
            field: 'complaintid',
            primaryKey: true,
            autoIncrement:true
        },
        workerId: {
            type: DataTypes.INTEGER,
            field: 'workerid',
            allowNull: false
        },
        complaint: {
            type: DataTypes.TEXT,
            field: 'complaints',
            allowNull:false
        },
        addedBy: {
            type: DataTypes.INTEGER,
            field: 'addedby'
        },
        dateRecorded: {
            type: 'DATE',
            field: 'daterecorded',
            defaultValue: new Date()
        }
    }, {
        tableName: 'complaints',
        underscored: true,
        timestamps: true,

    })
    return Complaint;
}