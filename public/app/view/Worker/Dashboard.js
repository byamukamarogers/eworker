
Ext.define('eworker.view.Worker.Dashboard', {
    extend: 'Ext.panel.Panel',
    xtype: 'workerProfile',
    requires: [
        'eworker.view.Worker.DashboardController',
        'eworker.view.Worker.DashboardModel'
    ],

    controller: 'worker-dashboard',
    viewModel: {
        type: 'worker-dashboard'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    items: [
        {
            title: 'Worker\s Profile',
            items: [
                {
                    xtype: 'fieldset',
                    height: 150,
                    bodyPadding: 15,
                    title: 'client Info',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            flex: 0.4,
                            height: 120,
                            //width: 400,
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    reference: 'lblFullName',
                                    flex: 0,
                                    margin: 0,
                                    fieldLabel: 'Full Name',
                                    labelWidth: 70,
                                    bind: '{fullName}'
                                },
                                {
                                    xtype: 'displayfield',
                                    flex: 0,
                                    margin: 0,
                                    fieldLabel: 'Email',
                                    labelWidth: 70,
                                    bind:'{email}'
                                },
                                {
                                    xtype: 'displayfield',
                                    reference: 'lblGender',
                                    margin: 0,
                                    fieldLabel: 'Gender',
                                    labelWidth: 70,
                                    value: 'Female'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 0.3,
                            height: 120,
                            width: 300,
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    flex: 0,
                                    margin: 0,
                                    fieldLabel: 'Address',
                                    labelPad: 0,
                                    labelWidth: 80,
                                    bind: '{address}'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: 0,
                                    padding: 0,
                                    fieldLabel: 'Phone',
                                    labelWidth: 80,
                                    bind: '{telephone}'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 0.3,
                            height: 100,
                            width: 400,
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    margin: 0,
                                    fieldLabel: 'User Name',
                                    labelWidth: 70,
                                    bind: '{userId}'
                                },
                                {
                                    xtype: 'textfield',
                                    height: 80,
                                    width: 280,
                                    readOnly: true,
                                    fieldLabel: 'Date Registered',
                                    labelWidth: 50,
                                    bind: '{createdAt}',
                                    format: 'd-m-Y'
                                }
                            ]
                        }
                    ]
                }
            ],

            buttons: [
                {
                    xtype: 'button',
                    reference: 'btnUpdateInfo',
                    iconCls: 'x-fa fa-undo',
                    text: 'Update Info',
                    handler: 'onUpdateInfo'
                },
                {
                    xtype: 'button',
                    reference: 'btnDischarge',
                    disabled: true,
                    iconCls: 'x-fa fa-undo',
                    text: 'Cancel'
                }
            ]
        }
        //end of client details header
    ]
});
