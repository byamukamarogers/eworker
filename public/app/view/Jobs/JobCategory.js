
Ext.define('eworker.view.jobs.JobCategory',{
    extend: 'Ext.panel.Panel',
    xtype: 'jobcategory',
    requires: [
        'eworker.view.jobs.JobCategoryController',
        'eworker.view.jobs.JobCategoryModel'
    ],

    controller: 'jobs-jobcategory',
    viewModel: {
        type: 'jobs-jobcategory'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    layout: 'hbox',
    items: [
        {
            xtype: 'form',
            width: '40%',
            margin: '0 5 0 0',
            bodyPadding: 10,
            title: 'JOB CATEGORY FORM',
            reference: 'jobCategoryForm',
            frame: true,
            items: [
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    labelAlign:'top',
                    fieldLabel: 'Job Category Id',
                    bind: '{jobCategoryId}',
                    readOnly: true,
                    disabled: true
                },
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Job Category Id',
                    bind: '{jobCategoryId}',
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'textarea',
                    labelAlign: 'top',
                    anchor: '100%',
                    fieldLabel: 'Job Category Name',
                    bind: '{jobCategoryName}',
                    allowBlank: false
                },
                {
                    xtype: 'textarea',
                    labelAlign: 'top',
                    anchor: '100%',
                    fieldLabel: 'Description',
                    bind: '{jobCategoryDescription}',
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
        },
        {
            xtype: 'grid',
            reference: 'grdJobCategory',
            title: 'Job Categories List',
            height: 600,
            width: '60%',
            tbar: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Search',
                    enableKeyEvents: true,
                    listeners: {
                        keyup: 'onGridSearch'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    handler: 'onEditJobCategory'
                }
            ],
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SINGLE',
                selType: 'checkboxmodel',
            },
            columns: [
                { text: 'No', dataIndex: 'jobCategoryId', flex: 0.08 },
                { text: 'Job Category Name', dataIndex: 'jobCategoryName', flex: 0.3 },
                { text: 'Description', dataIndex: 'jobCategoryDescription', flex: 0.5 },
                ],
            plugins: [
                {
                    ptype: 'rowexpander',
                    rowBodyTpl: [
                        '<b>Description :</b> {jobCategoryDescription} </br>',
                        '<b>Category :</b> {jobCategoryName}'
                    ]
                }
            ]
        }
    ]
});
