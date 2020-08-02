"use strict";
module.exports = function (sequelize, DataTypes) {
    var StaffType = sequelize.define('StaffType', {
        staffTypeId: {
            type: DataTypes.INTEGER,
            field: 'stafftypeid',
            primaryKey: true
        },
        staffTypeName: {
            type: DataTypes.STRING(100),
            field: 'stafftype'
        }
    },
        {
            underscored: true,
            timestamps: true,
            tableName: 'stafftypes'
        });
    return StaffType;
    }