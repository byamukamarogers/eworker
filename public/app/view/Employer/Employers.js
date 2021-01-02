
Ext.define('eworker.view.Employer.Employers',{
    extend: 'Ext.panel.Panel',
    xtype: 'employerList',

    requires: [
        'eworker.view.Employer.EmployersController',
        'eworker.view.Employer.EmployersModel'
    ],

    controller: 'employer-employers',
    viewModel: {
        type: 'employer-employers'
    },
    listeners: {
        afterrender: 'onAfterRender',
    },
    items: [
        {
            xtype: 'grid',
            reference: 'grdEmployers',
            title: 'Employer\'s List',
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
                    text: 'Add Employer',
                    handler:'onAddEmployer'
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    handler: 'onEditEmployer'
                }
            ],
            selModel: {
                checkOnly: false,
                injectCheckbox: 'first',
                mode: 'SINGLE',
                selType: 'checkboxmodel',
            },
            columns: [
                { text: 'Employer No', dataIndex: 'employerId', flex: 0.08 },
                { text: 'Employer Name', dataIndex: 'fullName', flex: 0.2 },
                { text: 'Address', dataIndex: 'address', flex: 0.2 },
                { text: 'Telephone', dataIndex: 'telephone', flex: 0.15 },
                { text: 'Email', dataIndex: 'email', flex: 0.15 },
                ]
        }
    ]
});
