"use strict";
module.exports = function (sequelize, DataTypes) {
    var UserPermission = sequelize.define('UserPermission', {
        id: {
            type: DataTypes.INTEGER,
            field: 'userpermissionid',
            primaryKey:true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.STRING(50),
            field: 'userid',
            allowNull: false
        },
       roleId: {
            type: DataTypes.INTEGER,
            field: 'roleid',
            allowNull: false
        },
        readOnly: {
            type: DataTypes.BOOLEAN,
            field: 'readonly'
        },
        write: {
            type: DataTypes.BOOLEAN,
            field: 'write'
            
        },
        edit: {
            type: DataTypes.BOOLEAN,
            field: 'edit'
           
        },
        createdDate: {
            type: DataTypes.DATE,
            field:'createddate'
        },
        createdBy: {
            type: DataTypes.INTEGER,
            field: 'createdby',
            allowNull: false
        }
    },
        {
            underscored: true,
            timestamps: false,
            tableName: 'userpermissions'
        });
    return UserPermission;
}