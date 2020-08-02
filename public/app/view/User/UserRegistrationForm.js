
Ext.define('eworker.view.User.UserRegistrationForm',{
    extend: 'Ext.panel.Panel',
    xtype:'userRegistrationForm',

    requires: [
        'eworker.view.User.UserRegistrationFormController',
        'eworker.view.User.UserRegistrationFormModel'
    ],

    controller: 'user-userregistrationform',
    viewModel: {
        type: 'user-userregistrationform'
    },
    listeners:{
        afterrender:'onAfterRender'
    },
    items: [
        {
            title: 'User Registration Form',
            width: 300,
            bodyPadding:15,
            frame:true,
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel : 'User Id',
                    bind: '{userId}',
                    readOnly:true,
                    disabled:true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel : 'User Id',
                    bind: '{userId}',
                    readOnly:true,
                    hidden:true
                },
                {
                    xtype: 'combobox',
                    fieldLabel : 'Account Type',
                    bind: '{accountTypeId}',
                    displayField:'accountTypeName',
                    valueField:'accountTypeId',
                    reference:'cmboAccountType',
                    forceSelection:true,
                    editable:false
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'First Name',
                    bind: '{firstName}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'Last Name',
                    bind: '{lastName}'
                },
                {
                    xtype: 'textarea',
                    fieldLabel : 'Address',
                    bind: '{address}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'Telephone',
                    bind: '{telephone}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'Email',
                    bind: '{email}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'Password',
                    bind: '{password}'
                }
            ],
            buttons:[
                {
                    xtype:'button',
                    text:'cancel',
                    inconCls:'x-fa fas fa-reset'
                },
                {
                    xtype:'button',
                    text:'save',
                    inconCls:'x-fa fas fa-save',
                    handler: 'onSaveClicked'
                },
            ]
        }
    ]
});
