
Ext.define('eworker.view.Worker.WorkerRegistration', {
    extend: 'Ext.panel.Panel',
    xtype: 'workerRegistrationForm',

    requires: [
        'eworker.view.Worker.WorkerRegistrationController',
        'eworker.view.Worker.WorkerRegistrationModel'
    ],

    controller: 'worker-workerregistration',
    viewModel: {
        type: 'worker-workerregistration'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    title: 'Worker Registration Form',
    items: [
        {
            xtype: 'form',
            width: 300,
            bodyPadding: 10,
            frame: true,
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'User Id',
                    bind: '{userId}',
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Account Type',
                    bind: '{accountTypeId}',
                    value: 3,
                    readOnly: true,
                    disabled: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Account Type',
                    bind: '{accountTypeId}',
                    allowBlank: false,
                    value: 3,
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'First Name',
                    bind: '{firstName}',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Last Name',
                    bind: '{lastName}',
                    allowBlank: false
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Address',
                    bind: '{address}',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Telephone',
                    bind: '{telephone}',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    bind: '{email}',
                    allowBlank: false,
                    reference: 'txtEmail'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Password',
                    reference: 'txtPassword',
                    bind: '{password}'
                }
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: 'Reset',
                    iconCls: 'x-fa fas fa-refresh',
                    handler: function () {
                        this.up('form').getForm().reset();
                    }
                },
                {
                    xtype: 'button',
                    formBind: true,
                    text: 'save',
                    iconCls: 'x-fa fa-save',
                    handler: 'onSaveClicked'
                }
            ]
        }
    ]
});
