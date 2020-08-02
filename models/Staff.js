"use strict";
module.exports = function (sequelize, DataTypes) {
    let Staff = sequelize.define('Staff', {
        staffId: {
            type: DataTypes.INTEGER,
            field: 'staffid',
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(100),
            field: 'firstname',
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(100),
            field: 'lastname',
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            field: 'email'
        },
        gender: {
            type: DataTypes.STRING(7),
            field: 'gender',
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            field: 'address'
        },
        phone1: {
            type: DataTypes.STRING(13),
            field: 'phone1'
        },
        phone2: {
            type: DataTypes.STRING(13),
            field: 'phone2'
        },
        staffTypeId: {
            type: DataTypes.INTEGER,
            field: 'stafftypeid',
            allowNull: false
        },
        createdBy: {
            type: DataTypes.INTEGER,
            field: 'createdby',
            allowNull: false
        }
        
    },
        {
            underscored: true,
            timestamps: true,
            tableName: 'staff'
        });
    return Staff;
}