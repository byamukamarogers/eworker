
Ext.define('eworker.view.worker.Complaints', {
    extend: 'Ext.panel.Panel',
    xtype: 'worker-complaints',

    requires: [
        'eworker.view.worker.ComplaintsController',
        'eworker.view.worker.ComplaintsModel'
    ],

    controller: 'worker-complaints',
    viewModel: {
        type: 'worker-complaints'
    },
    listeners: {
        afterrender: 'onAfterRender',
    },
    items: [
        {
            xtype: 'grid',
            reference: 'grdWorkers',
            title: 'Domestic Worker\'s Complaints',
            height: 400,
            width: '100%',
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
                    text: 'Record Complaint',
                    handler: 'onAddComplaint'
                },
                {
                    xtype: 'button',
                    text: 'Update Complaint',
                    handler: 'onUpdateComplaint'
                }
            ],
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SINGLE',
                selType: 'checkboxmodel',
            },
            columns: [
                { text: 'No.', dataIndex: 'complaintId', flex: 0.08 },
                { text: 'Worker Id', dataIndex: 'workerId', flex: 0.08 },
                { text: 'Name', dataIndex: 'fullName', flex: 0.2 },
                { text: 'Complaint', dataIndex: 'complaint', flex: 0.3 },
                { text: 'Date Reported', xtype: 'datecolumn', format: 'Y-m-d g:i A', dataIndex: 'dateRecorded', flex: 0.2 }
            ]
        }
    ]
});
