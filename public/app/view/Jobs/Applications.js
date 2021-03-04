
Ext.define('eworker.view.Jobs.Applications', {
    extend: 'Ext.panel.Panel',
    xtype: 'applications',

    requires: [
        'eworker.view.Jobs.ApplicationsController',
        'eworker.view.Jobs.ApplicationsModel'
    ],

    controller: 'jobs-applications',
    viewModel: {
        type: 'jobs-applications'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    layout: 'hbox',
    items: [
        {
            xtype: 'grid',
            reference: 'grdJobsApplied',
            //title: (eworker.Globals.currentUser.accountTypeId===2)?'My Jobs':'Jobs',
            title: 'Jobs',
            height: 600,
            margin: '0 5 0 0',
            width: '50%',
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SINGLE',
                selType: 'checkboxmodel',
            },
            columns: [
                { text: 'Job No', dataIndex: 'jobId', flex: 0.08 },
                { text: 'Job Name', dataIndex: 'jobName', flex: 0.25 },
                { text: 'DeadLine', dataIndex: 'expiryDate', xtype: 'datecolumn', format: 'Y-m-d g:i A', flex: 0.2 }
            ],
            listeners: {
                select: 'onJobSelected'
            },
            plugins: [
                {
                    ptype: 'rowexpander',
                    rowBodyTpl: [
                        '<b>Approved :</b> {isApproved} </br>',
                        '<b>Job Description :</b> {jobDescription} </br>',
                        '<b>Job Category :</b> {JobCategory.jobCategoryName} </br>',
                        '<b>Posted By :</b> {fullName} </br>',
                        '<b>Phone :</b> {telephone} </br>',
                        '<b>Email :</b> {email} </br>',
                        '<b>Date Posted :</b> {datePosted}'
                    ]
                }
            ]
        },
        {
            xtype: 'grid',
            reference: 'grdJobApplications',
            title: 'Job Applications',
            height: 600,
            width: '50%',
            tbar: [
                {
                    xtype: 'textfield',
                    emptyText: 'Search',
                    enableKeyEvents: true,
                    listeners: {
                        keyup: 'onGridSearch'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Approve',
                    handler: 'onEditJobApplication'
                },
                {
                    xtype: 'button',
                    text: 'Reject',
                    handler: 'onEditJobApplication'
                }
            ],
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SINGLE',
                selType: 'checkboxmodel',
            },
            columns: [
                { text: 'App No', dataIndex: 'jobApplicationId', flex: 0.1 },
                { text: 'App Id', hidden:true, dataIndex: 'workerId', flex: 0.08 },
                { text: 'Applicant Name', dataIndex: 'fullName', flex: 0.3 },
                { text: 'Telephone', dataIndex: 'telephone', flex: 0.2 },
                { text: 'Status', dataIndex: 'isApproved', flex: 0.1 },
            ],
            plugins: [
                {
                    ptype: 'rowexpander',
                    rowBodyTpl: [
                        '<b>Email :</b> {Worker.email} </br>'
                    ]
                }
            ]
        }
    ]
});
