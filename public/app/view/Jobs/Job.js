
Ext.define('eworker.view.Jobs.Job',{
    extend: 'Ext.panel.Panel',
    xtype: 'jobs-list',

    requires: [
        'eworker.view.Jobs.JobController',
        'eworker.view.Jobs.JobModel',
        'eworker.view.Jobs.JobApplication',
        'eworker.view.jobs.jobDetails'
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
                    text: 'Apply For Job',
                    handler:'onApplyJob',
                    reference: 'applyBtn'
                },
                {
                    xtype: 'button',
                    text: 'Add Job',
                    handler:'onAddJob',
                    reference:'onAddJobBtn'
                },
                {
                    xtype: 'button',
                    text: 'Edit Job Details',
                    handler: 'onEditJob',
                    reference: 'onEditJobBtn'
                },
                {
                    xtype: 'button',
                    text: 'View Job Details',
                    handler: 'onViewJobDetail',
                    reference: 'ViewJobDetail'
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
                { text: 'Posted By', dataIndex: 'fullName', flex: 0.2 },
                { text: 'Telephone', dataIndex: 'telephone', flex: 0.1 },
                { text: 'DeadLine', dataIndex: 'expiryDate', xtype: 'datecolumn', format:'Y-m-d g:i A', flex: 0.2 }
            ],
            listeners: {
                select: function( record, index, eOpts ){
                    (record.selected.items[0].data.employerId !== eworker.Globals.currentUser.user_id)? this.up().lookupReference("onEditJobBtn").setDisabled(true):null;
                }
            },
            plugins: [
                {
                    ptype: 'rowexpander',
                    rowBodyTpl: [
                        '<b>Approved :</b> {isApproved} </br>',
                        '<b>Job Description :</b> {jobDescription} </br>',
                        '<b>Job Type :</b> {JobType.JobTypeName} </br>',
                        '<b>Contact Email :</b> {email} </br>',
                        '<b>Date Posted :</b> {datePosted}'
                    ]
                }
            ]
        }
    ]
});
