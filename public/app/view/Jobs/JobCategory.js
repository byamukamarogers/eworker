
Ext.define('eworker.view.jobs.JobType',{
    extend: 'Ext.panel.Panel',
    xtype: 'JobType',
    requires: [
        'eworker.view.jobs.JobTypeController',
        'eworker.view.jobs.JobTypeModel'
    ],

    controller: 'jobs-JobType',
    viewModel: {
        type: 'jobs-JobType'
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
            title: 'Job Type FORM',
            reference: 'JobTypeForm',
            frame: true,
            items: [
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    labelAlign:'top',
                    fieldLabel: 'Job Type Id',
                    bind: '{JobTypeId}',
                    readOnly: true,
                    disabled: true
                },
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Job Type Id',
                    bind: '{JobTypeId}',
                    readOnly: true,
                    hidden: true
                },
                {
                    xtype: 'textarea',
                    labelAlign: 'top',
                    anchor: '100%',
                    fieldLabel: 'Job Type Name',
                    bind: '{JobTypeName}',
                    allowBlank: false
                },
                {
                    xtype: 'numberfield',
                    labelAlign: 'top',
                    anchor: '100%',
                    fieldLabel: 'Minimum Salary',
                    bind: '{minSalary}',
                    allowBlank: false,
                    minValue: 0,
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    labelAlign: 'top',
                    anchor: '100%',
                    fieldLabel: 'Maximum Salary',
                    bind: '{maxSalary}',
                    allowBlank: false,
                    minValue: 0,
                    hideTrigger: true
                },
                {
                    xtype: 'textarea',
                    labelAlign: 'top',
                    anchor: '100%',
                    fieldLabel: 'Description',
                    bind: '{JobTypeDescription}',
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
            reference: 'grdJobType',
            title: 'Job Type List',
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
                    handler: 'onEditJobType'
                }
            ],
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SINGLE',
                selType: 'checkboxmodel',
            },
            columns: [
                { text: 'No', dataIndex: 'JobTypeId', flex: 0.08, hidden: true },
                { text: 'Job Type Name', dataIndex: 'JobTypeName', flex: 0.3 },
                { text: 'Min Salary', dataIndex: 'minSalary', flex: 0.25 },
                { text: 'Max Salary', dataIndex: 'maxSalary', flex: 0.25 },
                ],
            plugins: [
                {
                    ptype: 'rowexpander',
                    rowBodyTpl: [
                        '<b>Description :</b> {JobTypeDescription} </br>',
                        '<b>Category :</b> {JobTypeName}'
                    ]
                }
            ]
        }
    ]
});
