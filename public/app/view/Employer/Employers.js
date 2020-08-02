
Ext.define('eworker.view.Employer.Employers',{
    extend: 'Ext.panel.Panel',

    requires: [
        'eworker.view.Employer.EmployersController',
        'eworker.view.Employer.EmployersModel'
    ],

    controller: 'employer-employers',
    viewModel: {
        type: 'employer-employers'
    },

    html: 'Hello, World!!'
});
