
Ext.define('eworker.view.Jobs.Job',{
    extend: 'Ext.panel.Panel',

    requires: [
        'eworker.view.Jobs.JobController',
        'eworker.view.Jobs.JobModel'
    ],

    controller: 'jobs-job',
    viewModel: {
        type: 'jobs-job'
    },
    listeners: {
        afterrender:'onAfterRender',
    },
    items: [
        {
            extend: 'Ext.grid.Panel',
            xtype:'grid',
            reference:'grdjobs',
            title: 'Jobs List',
            columns: [
                { text: 'Job Id', dataIndex: 'jobId',flex: 0.2 },
                { text: 'Job Name', dataIndex: 'jobName',flex: 0.25 },
                { text: 'Job Description', dataIndex: 'jobDescription', flex: 0.25 },
                { text: 'Telephone', dataIndex: 'telephone', flex: 0.1 },
                { text: 'Address', dataIndex: 'address',flex: 0.2 }
            ],
            height: 200,
            width: '50%',
        }
    ]
});
