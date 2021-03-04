
Ext.define('eworker.view.Jobs.ApplicationForm',{
    extend: 'Ext.panel.Panel',

    requires: [
        'eworker.view.Jobs.ApplicationFormController',
        'eworker.view.Jobs.ApplicationFormModel'
    ],

    controller: 'jobs-applicationform',
    viewModel: {
        type: 'jobs-applicationform'
    },

    html: 'Hello, World!!'
});
