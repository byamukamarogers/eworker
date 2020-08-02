
Ext.define('eworker.view.User.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'userList',

    requires: [
        'eworker.view.User.UserController',
        'eworker.view.User.UserModel'
    ],

    controller: 'user-user',
    viewModel: {
        type: 'user-user'
    },
    listeners: {
        afterrender:'onAfterRender',
    },
    items: [
        {
            extend: 'Ext.grid.Panel',
            xtype:'grid',
            reference:'grdUsers',
            title: 'User List',
            columns: [
                { text: 'User Id', dataIndex: 'userId',flex: 0.2 },
                { text: 'First Name', dataIndex: 'firstName',flex: 0.25 },
                { text: 'Last Name', dataIndex: 'lastName', flex: 0.25 },
                { text: 'Telephone', dataIndex: 'telephone', flex: 0.1 },
                { text: 'Address', dataIndex: 'address',flex: 0.2 }
            ],
            height: 200,
            width: '50%',
        }
    ]
});
