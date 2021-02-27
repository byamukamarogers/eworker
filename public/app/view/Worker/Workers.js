
Ext.define('eworker.view.Worker.Workers', {
    extend: 'Ext.panel.Panel',
    xtype: 'workersList',

    requires: [
        'eworker.view.Worker.WorkersController',
        'eworker.view.Worker.WorkersModel'
    ],

    controller: 'worker-workers',
    viewModel: {
        type: 'worker-workers'
    },
    listeners: {
        afterrender: 'onAfterRender',
    },
    items: [
        {
            xtype: 'grid',
            reference: 'grdWorkers',
            title: 'Worker\'s List',
            height: 600,
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
                    text: 'Register Worker',
                    handler:'onAddWorker'
                },
                {
                    xtype: 'button',
                    text: 'Edit Worker',
                    handler: 'onEditWorker'
                }
            ],
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SINGLE',
                selType: 'checkboxmodel',
            },
            columns: [
                { text: 'User Id', dataIndex: 'workerId', flex: 0.08 },
                { text: 'First Name', dataIndex: 'firstName', flex: 0.1 },
                { text: 'Last Name', dataIndex: 'lastName', flex: 0.1 },
                { text: 'Email', dataIndex: 'email', flex: 0.15 },
                { text: 'Telephone', dataIndex: 'telephone', flex: 0.1 },
                { text: 'Address', dataIndex: 'address', flex: 0.2 },
                { text: 'Nationality', dataIndex: 'nationality', flex: 0.1 },
                { text: 'National ID', dataIndex: 'nationalIdNo', flex: 0.1 }
            ]
        }
    ]
});
