Ext.define('eworker.view.Staff.StaffType', {
    extend: 'Ext.panel.Panel',
    xtype: 'staffType',
    requires: [
        'eworker.view.Staff.StaffTypeController',
        'eworker.view.Staff.StaffTypeModel'
    ],

    controller: 'user-stafftype',
    viewModel: {
        type: 'user-stafftype'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    layout:'hbox',
    items: [
        {
            title: 'New Staff Type',
            width: 300,
            bodyPadding: 5,
            reference: 'accountTypeForm',
            margin:2,
            frame: true,
            xtype: 'form',
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Staff Type Id',
                    bind: '{staffTypeId}',
                    readOnly: true,
                    disabled: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Staff Type Id',
                    bind: '{staffTypeId}',
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Staff Type Name',
                    bind: '{staffTypeName}',
                    allowBlank: false
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
            reference: 'grdStaffTypes',
            title: 'Staff Types',
            columns: [
                { text: 'Type Id', dataIndex: 'staffTypeId', flex: 0.2 },
                { text: 'Staff Type Name', dataIndex: 'staffTypeName', flex: 0.4 }
            ],
            height: 400,
            width: '50%',
        }
    ]
});
