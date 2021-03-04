
Ext.define('eworker.view.UserManagement.UserSummary', {
    extend: 'Ext.panel.Panel',
    xtype: 'user-summary',

    requires: [
        'eworker.view.UserManagement.UserSummaryController',
        'eworker.view.UserManagement.UserSummaryModel'
    ],
    listeners: { afterrender: 'onAfterRender' },
    controller: 'usersummary',
    viewModel: {
        type: 'usersummary'
    },
    items: [{
        xtype: 'tabpanel',
        reference: 'tabpanel',
        activeTab: 0,
        bind: true,

        defaults: { readOnly: false, width: '98%', margin: '5 0 0 5' },

        items: [{

            title: 'User Details',
            reference: 'userinfo',
            defaults: { width: '60%' },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Health Unit ID',
                    bind: '{healthUnitId}',
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Staff ID',
                    bind: '{staffId}',
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'First Name',
                    bind: '{firstName}',
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Last Name',
                    bind: '{lastName}',
                    readOnly: true
                },
                {
                    xtype: 'combobox',
                    reference: 'cboDepartments',
                    fieldLabel: 'Department',
                    displayField: 'departmentName',
                    valueField: 'departmentId',
                    bind: '{departmentId}',
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    bind: '{email}',
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Phone',
                    bind: '{phone1}',
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Login ID',
                    reference: 'username',
                    bind: '{userId}',
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Password',
                    reference: 'passwd',
                    inputType: 'password',
                    bind: '{password}',
                    readOnly: true
                }


            ]
        },
        {
            //second tab
            title: 'Roles and Permissions',
            defaults: { width: '99%' },
            items: [
                {
                    flex: 0.97,
                    xtype: 'grid',
                    reference: 'grdUserPermissions',
                    margin: 5,
                    height: 350,
                    columns: [
                        {
                            text: 'Id',
                            dataIndex: 'roleId',
                            hidden: true
                        },
                        {
                            text: 'Role',
                            dataIndex: 'roleName',
                            flex: 0.4
                        },
                        {
                            xtype: 'checkcolumn',
                            reference: 'chkRead',
                            flex: 0.2,
                            text: 'ReadOnly',
                            dataIndex: 'readOnly',
                            inputValue: true,
                            uncheckedValue: false,
                            readOnly: false
                        },
                        {
                            xtype: 'checkcolumn',
                            reference: 'chkWrite',
                            dataIndex: 'write',
                            flex: 0.2,
                            text: 'Write',
                            inputValue: true,
                            uncheckedValue: false,
                            readOnly: false
                        },
                        {
                            xtype: 'checkcolumn',
                            reference: 'chkEdit',
                            dataIndex: 'edit', 
                            flex: 0.2,
                            text: 'Edit',
                            inputValue: true,
                            uncheckedValue: false,
                            readOnly: false
                        }
                    ]
                }

            ]
        }
        ]
    }],
    buttons: [
        {
            text: 'OK',
            reference: 'btnOK',
            handler: 'onOKClicked'
            //disabled: true
        },
        {
            text: 'Cancel',
            reference: 'btnCancel',
            handler: 'onCancelClicked',
            disabled: true
        }
    ]
});
