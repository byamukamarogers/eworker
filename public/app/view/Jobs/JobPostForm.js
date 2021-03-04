
Ext.define('eworker.view.Jobs.JobPostForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'job-post-form',

    requires: [
        'eworker.view.Jobs.JobPostFormController',
        'eworker.view.Jobs.JobPostFormModel'
    ],

    controller: 'jobs-jobpostform',
    viewModel: {
        type: 'jobs-jobpostform'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    title: 'New Job Registration Form',
    items: [
        {
            xtype: 'form',
            width: 600,
            bodyPadding: 10,
            reference: 'jobPostForm',
            frame: true,
            layout: 'anchor',
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Job No',
                    labelAlign: 'top',
                    anchor: '100%',
                    bind: '{jobId}',
                    readOnly: true,
                    disabled: true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Job No',
                    bind: '{jobId}',
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'combobox',
                    labelAlign: 'top',
                    fieldLabel: 'Job Type',
                    anchor: '100%',
                    bind: '{JobTypeId}',
                    reference: 'cmbJobType',
                    displayField: 'JobTypeName',
                    valueField: 'JobTypeId',
                    edtable: false,
                    forceSelection: true,
                    allowBlank: false
                },
                {
                    xtype: 'textarea',
                    labelAlign: 'top',
                    fieldLabel: 'Job Name',
                    anchor: '100%',
                    bind: '{jobName}',
                    reference: 'jobName',
                    allowBlank: false
                },
                {
                    xtype: 'textarea',
                    labelAlign: 'top',
                    fieldLabel: 'Job Description',
                    anchor: '100%',
                    bind: '{jobDescription}',
                    reference: 'jobDescription',
                    allowBlank: false
                },
                {
                    xtype: 'datefield',
                    labelAlign: 'top',
                    fieldLabel: 'Deadline',
                    anchor: '100%',
                    bind: '{expiryDate}'
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
