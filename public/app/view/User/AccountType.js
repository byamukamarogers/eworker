
Ext.define('eworker.view.User.AccountType', {
    extend: 'Ext.panel.Panel',
    xtype: 'acountType',
    requires: [
        'eworker.view.User.AccountTypeController',
        'eworker.view.User.AccountTypeModel'
    ],

    controller: 'user-accounttype',
    viewModel: {
        type: 'user-accounttype'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    layout:'hbox',
    items: [
        {
            title: 'New Account Tye',
            width: 300,
            bodyPadding: 5,
            margin:2,
            frame: true,
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Account Type Id',
                    bind: '{accountTypeId}',
                    readOnly: true,
                    disabled: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Account Type Id',
                    bind: '{accountTypeId}',
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Account Type Name',
                    bind: '{accountTypeName}'
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Description',
                    bind: '{description}'
                },
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: 'cancel',
                    inconCls: 'x-fa fas fa-reset'
                },
                {
                    xtype: 'button',
                    text: 'save',
                    inconCls: 'x-fa fas fa-save',
                    handler: 'onSaveClicked'
                },
            ]
        },
        {
            extend: 'Ext.grid.Panel',
            xtype: 'grid',
            reference: 'grdAccountTypes',
            title: 'Account Types',
            columns: [
                { text: 'Type Id', dataIndex: 'AccountTypeId', flex: 0.2 },
                { text: 'Acount Type Name', dataIndex: 'accountTypeName', flex: 0.4 },
                { text: 'Description', dataIndex: 'description', flex: 0.4 }
            ],
            height: 200,
            width: '50%',
        }
    ]
});
