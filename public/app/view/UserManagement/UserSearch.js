
Ext.define('eworker.view.UserManagement.UserSearch', {
    extend: 'Ext.panel.Panel',
    xtype: 'user-search',
    listeners: { afterrender: 'onAfterRender' },
    requires: [
        'eworker.view.UserManagement.UserSearchController',
        'eworker.view.UserManagement.UserSearchModel'
    ],

    controller: 'usersearch',
    viewModel: {
        type: 'usersearch'
    },
    defaultButton: 'btnFind',
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'combobox',
                    margin: 5,
                    reference: 'cboSearchType',
                    fieldLabel: 'Search Type',
                    value: 'loginId',
                    store: {
                        data: [
                            { id: 'userid', name: 'Login ID' },
                            { id: 'name', name: 'Name' },
                            { id: 'phoneno', name: 'Phone No' }

                        ]
                    },
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'id'
                },
                {
                    xtype: 'textfield',
                    reference: 'txtFind',
                    margin: '5 5 5 0'
                },
                {
                    xtype: 'button',
                    reference: 'btnFind',
                    text: 'Find',
                    iconCls: 'x-fa fa-search',
                    margin: '5 5 5 0',
                    handler: 'onFindClicked'
                }
            ]
        },
        {
            xtype: 'container',
            //layout: 'hbox',
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    items: [

                        {
                            xtype: 'toolbar',
                            items: [
                                {
                                    text: 'Add New',
                                    iconCls: 'x-fa fa-user',
                                    handler: 'onNewUser'
                                },
                                {
                                    text: 'Edit',
                                    iconCls: 'x-fa fa-edit',
                                    handler: 'onNewUser'
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            title: 'Users',
                            items: [

                                {
                                    xtype: 'grid',
                                    reference: 'grdUsers',
                                    width: '98%',
                                    height: 360,
                                    margin: 5,

                                    columns: [
                                        { text: 'First Name', dataIndex: 'firstName', flex: 0.2, align: 'left' },
                                        { text: 'Last Name', dataIndex: 'lastName', flex: 0.2, align: 'left' },
                                        { text: 'Login ID', dataIndex: 'userId', flex: 0.3, align: 'left' },
                                        { text: 'Is Active', dataIndex: 'isActive', flex: 0.2, align: 'left' },
                                        { text: 'Staff ID', dataIndex: 'staffId', hidden: true }
                                    ],
                                    listeners: { select: 'onUserSelected' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }

    ]
});