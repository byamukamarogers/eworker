
Ext.define('eworker.view.worker.ComplaintForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'complaint-form',
    requires: [
        'eworker.view.worker.ComplaintFormController',
        'eworker.view.worker.ComplaintFormModel'
    ],

    controller: 'worker-complaintform',
    viewModel: {
        type: 'worker-complaintform'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    title: 'Worker Complaint Form',
    items: [
        {
            xtype: 'form',
            width: 600,
            bodyPadding: 10,
            reference: 'complaintForm',
            frame: true,
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Compliant Id',
                    bind: '{complaintId}',
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'htmleditor',
                    labelAlign: 'top',
                    fieldLabel: 'Complaints',
                    bind: '{complaint}',
                    reference: 'complaint',
                    allowBlank: false
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
