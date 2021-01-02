
Ext.define('eworker.view.Jobs.Job',{
    extend: 'Ext.panel.Panel',
    xtype: 'jobs-list',

    requires: [
        'eworker.view.Jobs.JobController',
        'eworker.view.Jobs.JobModel'
    ],

    controller: 'jobs-job',
    viewModel: {
        type: 'jobs-job'
    },
    listeners: {
        afterrender: 'onAfterRender',
    },
    items: [
        {
            xtype: 'grid',
            reference: 'grdWorkers',
            title: 'Job\'s List',
            height: 600,
            width: '100%',
            scrollable: true,
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
                    text: 'Add Job',
                    handler:'onAddJob'
                },
                {
                    xtype: 'button',
                    text: 'Edit Job Details',
                    handler: 'onEditJob'
                }
            ],
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SINGLE',
                selType: 'checkboxmodel',
            },
            columns: [
                { text: 'Job No', dataIndex: 'jobId', flex: 0.08 },
                { text: 'Job Name', dataIndex: 'jobName', flex: 0.15 },
                { text: 'Description', dataIndex: 'jobDescription', flex: 0.1 },
                { text: 'Posted By', dataIndex: 'employerId', flex: 0.2 },
                { text: 'Telephone', dataIndex: 'telephone', flex: 0.1 },
                { text: 'DeadLine', dataIndex: 'expiryDate', xtype: 'datecolumn',   format:'Y-m-d g:i A', flex: 0.2 }
            ],
            plugins: [
                {
                    ptype: 'rowexpander',
                    rowBodyTpl: [
                        '<b>Approved :</b> {isApproved} </br>',
                        '<b>Job Description :</b> {jobDescription} </br>',
                        '<b>Job Category :</b> {JobCategory.jobCategoryName} </br>',
                        '<b>Contact Email :</b> {email} </br>',
                        '<b>Date Posted :</b> {datePosted}'
                    ]
                }
            ]
        }
    ]
});
