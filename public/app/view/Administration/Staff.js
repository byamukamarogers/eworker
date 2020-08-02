
Ext.define('eworker.view.Administration.Staff',{
    extend: 'Ext.panel.Panel',

    requires: [
        'eworker.view.Administration.StaffController',
        'eworker.view.Administration.StaffModel'
    ],

    controller: 'administration-staff',
    viewModel: {
        type: 'administration-staff'
    },

    html: 'Hello, World!!'
});
