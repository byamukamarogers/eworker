
Ext.define('eworker.view.Worker.MyJobApplications',{
    extend: 'Ext.panel.Panel',
    xtype: 'myJobApplications',

    requires: [
        'eworker.view.Worker.MyJobApplicationsController',
        'eworker.view.Worker.MyJobApplicationsModel'
    ],

    controller: 'worker-myjobapplications',
    viewModel: {
        type: 'worker-myjobapplications'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    layout: 'hbox',
    items: [
        {
            xtype: 'grid',
            reference: 'grdJobApplications',
            title: 'My Job Applications',
            height: 600,
            width: '100%',
            scrollable: true,
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SINGLE',
                selType: 'checkboxmodel',
            },
            columns: [
                { text: 'App No:', dataIndex: 'jobApplicationId', flex: 0.1 },
                { text: 'Worker Id', hidden:true, dataIndex: 'workerId', flex: 0.08 },
                { text: 'Job Name', dataIndex: 'jobName', flex: 0.3 },
                { text: 'Employer', dataIndex: 'employerFullName', flex: 0.2 },
                { text: 'Expiry Date', dataIndex: 'expiryDate', xtype:'datecolumn', format:'d-m-Y g:i A', flex: 0.2 },
                { text: 'Status', dataIndex: 'status', flex: 0.1 },
            ],
            plugins: [
                {
                    ptype: 'rowexpander',
                    rowBodyTpl: [
                        '<b>Job Description :</b> {Job.jobDescription} </br>'
                    ]
                }
            ]
        }
    ]
});
