
Ext.define('eworker.view.UserManagement.UserRegistration', {
    extend: 'Ext.panel.Panel',
    xtype: 'user-registration-form',
    requires: [
        'eworker.view.UserManagement.UserRegistrationController',
        'eworker.view.UserManagement.UserRegistrationModel',
        'eworker.view.UserManagement.UserSummary'
    ],
    listeners: { afterrender: 'onAfterRender' },
    height: 600,
    margin: 1,
    controller: 'userregistration',
    viewModel: {
        type: 'userregistration'
    },


    layout: 'border',
    items: [
        {
            region: 'west',
            title: 'List of Staff',
            xtype: 'panel',
            //width: 600,
            flex: 0.6,
            split: true,
            collapsible: false,
            //margin: '0 5 5 5',
            
            items: [
                {
                    xtype: 'grid',
                   
                  
                    listeners: { select: 'onUserSelected' },
                    reference: 'grdStaff',

                    columns: [{ text: 'First Name', dataIndex: 'firstName', flex: 0.25, align: 'left' },
                    { text: 'Last Name', dataIndex: 'lastName', flex: 0.25, align: 'left' },
                    { text: 'Staff Category', dataIndex: 'stafftype', flex: 0.25, align: 'left'},
                    { text: 'Department', dataIndex: 'department', flex: 0.25, align: 'left'},
                    { text: 'Staff ID', dataIndex: 'staffId', hidden: true },
                    { text: 'Staff ID', dataIndex: 'healthUnitId', hidden: true }]
                }
            ]
        },

        {
            region: 'center',
            title: 'Add User',
            xtype: 'panel',
            flex: 0.4,
            height: 200,
            //margin: '0 5 5 0',
            items: [
                {
                    xtype: 'user-summary',
                    reference: 'user-summary',
                    isReadOnly: true
                }
            ]
        }
    ]
});
