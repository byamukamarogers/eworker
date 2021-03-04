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
        'eworker.view.UserManagement.UserManagement',
        'eworker.view.worker.Complaints',
        'eworker.view.worker.ComplaintForm',
        'eworker.view.Jobs.Job',
        'eworker.view.jobs.JobType',
        'eworker.view.Employer.EmployerRegistrationForm',
        'eworker.view.Jobs.Applications',
        'eworker.view.Staff.StaffType',
        'eworker.view.Worker.Dashboard',
        'eworker.view.Worker.MyJobApplications',
    ],

    controller: 'main',
    viewModel: 'main',

    title: 'Eworker',
    layout: 'border',
    height: 'max',
    listeners:{
        beforerender:'onBeforeRender'
    },
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
                        },
                        style:{
                            color: 'white'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'logout',
                        margin: 2,
                        handler: 'onLogoutClicked'
                    }
                ]
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
                    reference:'workerMenu',
                    iconCls: 'fa fa-pencil-square-o',
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: 'Profile', handler: 'onProfileClick', reference: 'workerProfileMenu'},
                                { text: 'Workers', handler:'onSearchWorkerSelected', reference: 'workersMenu'},
                                { text: 'Job Applications', handler: 'onMyJobApplicationsSelect' },
                                { text: 'Complaints', handler: 'onComplaintsSelect'}
                            ]
                        }
                    ]
                },
                {
                    title: 'Employers',
                    reference:'employerMenu',
                    iconCls: 'fa fa-pencil-square-o',
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: 'Dashboard', handler: 'onFrontDashboardSelected' },
                                { text: 'Employers', handler: 'onEmployerListSelected' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Staff',
                    reference:'staffMenu',
                    iconCls: 'fa fa-pencil-square-o',
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: 'Dashboard', handler: 'onFrontDashboardSelected' },
                                { text: 'Staff', handler: 'onViewStaffSelect' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Jobs',
                    reference:'jobsMenu',
                    iconCls: 'fa fa-pencil-square-o',
                    height: 200,
                    scrollable: 'y',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                { text: 'Dashboard'},
                                { text: 'Jobs', handler: 'onJobSelect' },
                                { text: 'Job Applications', handler: 'onJobApplicationsSelect', reference: 'jobMenu' },
                                { text: 'Job Type', handler: 'onJobTypeSelect', reference:'JobTypeMenu' }
                            ]
                        }
                    ]
                },
                {
                    title: 'Adminstration',
                    reference:'adminMenu',
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
                                { text: 'User Search', iconCls: 'x-fa fa-find', handler: 'onSearchUserSelected' },
                                { text: 'AccountType', iconCls: 'x-fa fa-list', handler: 'onAccountTypeSelected' },
                                { text: 'Staff Type', iconCls: 'x-fa fa-list', handler: 'onStaffTypeSelect' }
                            ]
                        }
                    ]
                }   
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
