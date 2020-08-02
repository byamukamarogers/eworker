
Ext.define('eworker.view.Worker.Workers',{
    extend: 'Ext.panel.Panel',

    requires: [
        'eworker.view.Worker.WorkersController',
        'eworker.view.Worker.WorkersModel'
    ],

    controller: 'worker-workers',
    viewModel: {
        type: 'worker-workers'
    },

    html: 'Hello, World!!'
});
