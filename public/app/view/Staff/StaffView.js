
Ext.define('eworker.view.Staff.StaffView', {
    extend: 'Ext.form.Panel',
    xtype: 'staff-view',
    requires: [
        'eworker.view.Staff.StaffViewController',
        'eworker.view.Staff.StaffViewModel'
    ],
    listeners: { afterrender: 'onAfterRender' },
    controller: 'staffview',
    viewModel: {
        type: 'staffview'
    },
    title: 'Staff Details',
    width: '55%',
    defaults: { margin: 2, readOnly: true },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Staff ID',
            disabled: true,
            bind: '{staffId}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'First Name',
            bind: { value: '{firstName}', readOnly: '{readOnly}' },
            allowBlank: false
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            bind: { value: '{lastName}', readOnly: '{readOnly}' },
            allowBlank: false
        },
        {
            xtype: 'radiogroup',
            allowBlank: false,
            fieldLabel: 'Gender',
            bind: '{gender}',
            defaultType: 'radiofield',
            defaults: { flex: 2 },
            layout: 'hbox',
            items: [
                {
                    boxLabel: 'Male',
                    name: 'gender3',
                    inputValue: 'M',
                    bind: '{gender}'
                },
                {
                    boxLabel: 'Female',
                    name: 'gender3',
                    inputValue: 'F',
                    bind: '{gender}'
                }
            ]
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Address',
            bind: '{address}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Phone1',
            bind: '{phone1}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Phone2',
            bind: '{phone2}'
        },
        {
            xtype: 'combobox',
            allowBlank: false,
            reference: 'cboStaffTypes',
            bind: '{staffTypeId}',
            fieldLabel: 'Staff Type',
            valueField: 'staffTypeId',
            displayField: 'staffTypeName',
            queryMode: 'local'
        },
        {
            xtype: 'combobox',
            allowBlank: false,
            bind: '{departmentId}',
            reference: 'cboDepartments',
            fieldLabel: 'Department',
            valueField: 'departmentId',
            displayField: 'departmentName',
            queryMode: 'local'
        }
    ]
});
