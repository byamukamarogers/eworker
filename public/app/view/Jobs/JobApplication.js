
Ext.define('eworker.view.Jobs.JobApplication',{
    extend: 'Ext.panel.Panel',
    xtype: 'jopApplicationForm',
    requires: [
        'eworker.view.Jobs.JobApplicationController',
        'eworker.view.Jobs.JobApplicationModel'
    ],

    controller: 'jobs-jobapplication',
    viewModel: {
        type: 'jobs-jobapplication'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    title: 'Application Form',
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
                    fieldLabel: 'Job Category',
                    anchor: '100%',
                    bind: '{jobCategoryId}',
                    reference: 'cmbJobCategory',
                    displayField: 'jobCategoryName',
                    valueField: 'jobCategoryId',
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
                    bind: '{expiryDate}',
                    format: 'd-m-Y'
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
