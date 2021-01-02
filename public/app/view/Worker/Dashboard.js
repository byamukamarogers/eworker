
Ext.define('eworker.view.Worker.Dashboard',{
    extend: 'Ext.panel.Panel',

    requires: [
        'eworker.view.Worker.DashboardController',
        'eworker.view.Worker.DashboardModel'
    ],

    controller: 'worker-dashboard',
    viewModel: {
        type: 'worker-dashboard'
    },

    html: 'Hello, World!!'
});
