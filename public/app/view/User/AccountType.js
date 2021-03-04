
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
            title: 'New Account Type',
            width: 300,
            bodyPadding: 5,
            reference: 'accountTypeForm',
            margin:2,
            frame: true,
            xtype: 'form',
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
                    bind: '{accountTypeName}',
                    allowBlank: false
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Description',
                    bind: '{description}'
                }
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: 'cancel',
                    handler: function() {
                        this.up('form').getForm().reset();
                    },
                    iconCls: 'x-fa fas fa-refresh'
                },
                {
                    xtype: 'button',
                    text: 'save',
                    iconCls: 'x-fa fas fa-save',
                    handler: 'onSaveClicked',
                    formBind:true
                },
            ]
        },
        {
            xtype: 'grid',
            reference: 'grdAccountTypes',
            title: 'Account Types',
            columns: [
                { text: 'Type Id', dataIndex: 'accountTypeId', flex: 0.2 },
                { text: 'Acount Type Name', dataIndex: 'accountTypeName', flex: 0.4 },
                { text: 'Description', dataIndex: 'description', flex: 0.4 }
            ],
            height: 400,
            width: '50%',
        }
    ]
});
