"use strict";
module.exports = function (sequelize, DataTypes) {
    var Role = sequelize.define('Role', {
        roleId: {
            type: DataTypes.INTEGER,
            field: 'roleid',
            primaryKey: true
        },
       roleName: {
            type: DataTypes.STRING(100),
            field: 'rolename'
        }
    },
        {
            underscored: true,
            timestamps: false,
            tableName: 'userroles'
        });
    return Role;
}