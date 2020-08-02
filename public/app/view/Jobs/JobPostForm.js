
Ext.define('eworker.view.Jobs.JobPostForm',{
    extend: 'Ext.panel.Panel',

    requires: [
        'eworker.view.Jobs.JobPostFormController',
        'eworker.view.Jobs.JobPostFormModel'
    ],

    controller: 'jobs-jobpostform',
    viewModel: {
        type: 'jobs-jobpostform'
    },

    html: 'Hello, World!!'
});
