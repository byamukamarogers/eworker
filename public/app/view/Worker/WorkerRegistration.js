
Ext.define('eworker.view.Worker.WorkerRegistration',{
    extend: 'Ext.panel.Panel',

    requires: [
        'eworker.view.Worker.WorkerRegistrationController',
        'eworker.view.Worker.WorkerRegistrationModel'
    ],

    controller: 'worker-workerregistration',
    viewModel: {
        type: 'worker-workerregistration'
    },

    html: 'Hello, World!!'
});
