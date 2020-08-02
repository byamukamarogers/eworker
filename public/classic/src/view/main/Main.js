/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('eworker.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'eworker.view.main.MainController',
        'eworker.view.main.MainModel',
        'eworker.view.User.UserRegistrationForm',
        'eworker.view.User.User',
        'eworker.view.Staff.StaffView',
        'eworker.view.Staff.StaffRegistry',
        'eworker.view.Staff.StaffMember',
        'eworker.view.Jobs.Job',
        'eworker.view.Jobs.JobPostForm',
        'eworker.view.Worker.WorkerRegistration',
        'eworker.view.Worker.Workers',
        'eworker.view.User.AccountType',
        'eworker.view.Employer.Employers',
    ],

    controller: 'main',
    viewModel: 'main',

    title: 'Eworker',
    layout: 'border',
    height: 'max',


    items: [
        {
            region: 'north',
            //layout: 'hbox',
            header: {
                height: 70,
                margin: 1,
                title: 'Eworker',
                //html: '<img src="resources/nhis-logo.png" style="display:block; width:6%; height: auto">',
                items: [
                    {
                        xtype: 'label',
                        bind: {
                            text: 'Welcome {fullName}'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'logout',
                        margin: 2,
                        handler: 'onLogoutClicked'
                    }]
            }
        },
        {
            region: 'west',
            width: 230,
            //title: 'Control Panel',
            layout: {
                type: 'accordion',
                title: 'Control Panel2',
                titleCollapse: true,
                animate: true,
                activeOnTop: false,
                collapseFirst : true

            },
            items: [
                {
                    title: 'Workers',
                    iconCls: 'fa fa-pencil-square-o',
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: 'Dashboard'},
                                { text: 'Search Worker', handler:'onSearchWorkerSelected'},
                                { text: 'Register New Worker'},
                                { text: 'Booking & Appointments' },
                                { text: 'Complaints'}
                            ]
                        }
                    ]
                },
                {
                    title: 'Employers',
                    iconCls: 'fa fa-pencil-square-o',
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: 'Dashboard', handler: 'onFrontDashboardSelected' },
                                { text: 'Search Employer' },
                                { text: 'Register New Employer', handler: 'onRegisterEmployer' },
                                { text: 'Booking & Appointments', handler: 'onAppointmentSelected' },
                                { text: 'Tarrif List', handler: 'onTariffListSelected' },
                                { text: 'Test', handler: 'onTestSelected' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Employers-phantom',
                    iconCls: 'fa fa-pencil-square-o',
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: 'Dashboard', handler: 'onFrontDashboardSelected' },
                                { text: 'Search & Add visit', handler: 'onSearchClient' },
                                { text: 'Register New Client', handler: 'onRegisterClient' },
                                { text: 'Booking & Appointments', handler: 'onAppointmentSelected' },
                                { text: 'Tarrif List', handler: 'onTariffListSelected' },
                                { text: 'Test', handler: 'onTestSelected' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Adminstration',
                    iconCls: 'fa fa-pencil-square-o',
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: 'Dashboard' },
                                { text: 'Staff', iconCls: 'x-fa fa-users', handler: 'onStaffSelected' },
                                { text: 'AccountType', iconCls: 'x-fa fa-list', handler: 'onAccountTypeSelected' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Jobs',
                    iconCls: 'fa fa-pencil-square-o',
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: 'Dashboard'},
                                { text: 'Search Jobs', },
                                { text: 'Register New Job' }
                            ]
                        }
                    ]
                },
            ]

        },
        {
            //the response body
            region: 'center',
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    //Replace:true,
                    itemId: 'centerPanel'
                    //overflowY: 'scroll'
                    //reference: 'centerPanel'
                }
            ]
        }
    ]
});
