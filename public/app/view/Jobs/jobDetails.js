
Ext.define('eworker.view.jobs.jobDetails',{
    extend: 'Ext.panel.Panel',
    xtype: 'jobDetails',

    requires: [
        'eworker.view.jobs.jobDetailsController',
        'eworker.view.jobs.jobDetailsModel'
    ],

    controller: 'jobs-jobdetails',
    viewModel: {
        type: 'jobs-jobdetails'
    },
    listeners: {
        afterrender: 'onAfterRender'
    },
    items: [
        {
            //title: 'Worker\s Profile',
            items: [
                {
                    xtype: 'fieldset',
                    bodyPadding: 15,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            flex: 0.4,
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    flex: 0,
                                    margin: 0,
                                    fieldLabel: 'Job Name',
                                    labelWidth: 70,
                                    bind: '{jobName}'
                                },
                                {
                                    xtype: 'displayfield',
                                    flex: 0,
                                    margin: 0,
                                    fieldLabel: 'Job Description',
                                    labelWidth: 70,
                                    bind:'{jobDescription}'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: 0,
                                    fieldLabel: 'Expiry Date',
                                    labelWidth: 70,
                                    bind: '{expiryDate}'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 0.3,
                            //height: 120,
                            width: 300,
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    flex: 0,
                                    margin: 0,
                                    fieldLabel: 'Employer',
                                    labelPad: 0,
                                    labelWidth: 80,
                                    bind: '{fullName}'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: 0,
                                    padding: 0,
                                    fieldLabel: 'Phone',
                                    labelWidth: 80,
                                    bind: '{telephone}'
                                },
                                {
                                    xtype: 'displayfield',
                                    margin: 0,
                                    padding: 0,
                                    fieldLabel: 'Address',
                                    labelWidth: 80,
                                    bind: '{empAddress}'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            flex: 0.3,
                           // height: 100,
                            width: 400,
                            fieldLabel: '',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    margin: 0,
                                    fieldLabel: 'Max Salary',
                                    bind: '{maxSalary}'+' UGX'
                                },
                                {
                                    xtype: 'displayfield',
                                    fieldLabel: 'Min Salary',
                                    bind: '{minSalary}'+' UGX'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        //end of client details header
    ]
});
