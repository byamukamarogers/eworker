
Ext.define('eworker.view.Employer.EmployerRegistrationForm',{
    extend: 'Ext.panel.Panel',
    xtype: 'employerRegForm',

    requires: [
        'eworker.view.Employer.EmployerRegistrationFormController',
        'eworker.view.Employer.EmployerRegistrationFormModel'
    ],

    controller: 'employer-employerregistrationform',
    viewModel: {
        type: 'employer-employerregistrationform'
    },
    listeners:{
        afterrender:'onAfterRender'
    },
    title: 'Employer Registration Form',
    items: [
        {
            width: 300,
            xtype: 'form',
            bodyPadding:15,
            frame:true,
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel : 'Employer Id',
                    bind: '{employerId}',
                    readOnly:true,
                    disabled:true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel : 'Employer Id',
                    bind: '{employerId}',
                    readOnly:true,
                    hidden:true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel : 'Account Type',
                    bind: '{accountTypeId}',
                    value: 2,
                    hideTrigger: true,
                    editable:false,
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'First Name',
                    bind: '{firstName}',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'Last Name',
                    bind: '{lastName}',
                    allowBlank: false
                },
                {
                    xtype: 'textarea',
                    fieldLabel : 'Address',
                    bind: '{address}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'Telephone',
                    bind: '{telephone}',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'Email',
                    bind: '{email}',
                    reference: 'txtEmail',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel : 'Password',
                    bind: '{password}',
                    reference: 'txtPassword'
                }
            ],
            buttons:[
                {
                    xtype:'button',
                    text:'cancel',
                    inconCls:'x-fa fas fa-reset',
                    handler: function(){
                        this.up('form').getForm().reset();
                    }
                },
                {
                    xtype:'button',
                    formBind: true,
                    text:'save',
                    inconCls:'x-fa fas fa-save',
                    handler: 'onSaveClicked'
                },
            ]
        }
    ]
});
