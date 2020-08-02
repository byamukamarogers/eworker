
Ext.define('eworker.view.Staff.StaffMember', {
    extend: 'Ext.form.Panel',
    xtype: 'staff-member',
    requires: [
        'eworker.view.Staff.StaffMemberController',
        'eworker.view.Staff.StaffMemberModel'
    ],
    listeners: { afterrender: 'onAfterRender' },
    autoShow: true,
    bind: true,
    controller: 'staffmember',
    viewModel: {
        type: 'staffmember'
    },
    defaults: { width: '98%', margin: 2 },
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'Staff ID',
            bind: '{staffId}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'First Name',
            allowBlank: false,
            bind: '{firstName}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            allowBlank: false,
            bind: '{lastName}'
        },
        {
            xtype: 'combobox',
            allowBlank: false,
            fieldLabel: 'Gender',
            bind: '{gender}',
            displayField: 'genderDisplay',
            valuField: 'gender',
            editable: false,
            layout: 'hbox',
            store: {
                data: [
                    { gender: 'M', genderDisplay: 'MALE' },
                    { gender: 'F', genderDisplay: 'FEMALE' }
                ]
            }
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Address',
            bind: '{address}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Phone 1',
            bind: '{phone1}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Phone2',
            bind: '{phone2}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            bind: '{email}'
        },
        {
            xtype: 'combobox',
            reference: 'cboStaffTypes',
            fieldLabel: 'Staff Type',
            bind: '{staffTypeId}',
            displayField: 'staffTypeName',
            valueField: 'staffTypeId',
            queryMode: 'local'
        },

    ],
    buttons: [
        {
            text: 'OK',
            reference: 'btnOK',
            handler: 'onOKClicked'
        },
        {
            text: 'Cancel',
            reference: 'btnCancel',
            handler: 'onCancelClicked'
        }
    ]
});
