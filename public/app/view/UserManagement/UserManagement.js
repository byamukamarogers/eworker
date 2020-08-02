
Ext.define('eworker.view.UserManagement.UserManagement', {
    extend: 'Ext.panel.Panel',
    xtype: 'user-management',
    requires: [
        'eworker.view.UserManagement.UserManagementController',
        'eworker.view.UserManagement.UserManagementModel',
        'eworker.view.UserManagement.UserSearch',
        'eworker.view.UserManagement.UserSummary'
    ],

    controller: 'usermanagement',
    viewModel: {
        type: 'usermanagement'
    },

    margin: 0,
    layout: 'hbox',
    items: [
        {
            xtype: 'user-search',
            title: 'Search',
            flex: 0.6
        },
        {
            xtype: 'user-summary',
            reference: 'user-summary',
            title: 'User Summary',
            isReadOnly:true,
            flex: 0.4
        }
    ]
});
