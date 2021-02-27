Ext.define('eworker.view.Jobs.ApplicationsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobs-applications',
    onAfterRender: async function () {
        let data = this.getView().formData;
        if (data) {
            this.getViewModel().setData(data);
        }
        await this.loadJobs();
        if (eworker.Globals.currentUser.accountTyeId === 2) {
            await this.loadJobs(eworker.Globals.currentUser.user_id);
        }
    },
    loadJobs: async function (employerId) {
        let combo = this.lookupReference('grdJobsApplied');
        let response = await Ext.Ajax.request({ url: '/job?employerId =' + employerId, method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            for (let i = 0; i < records.length; i++) {
                records[i].fullName = records[i].Employer.firstName + ' ' + records[i].Employer.lastName;
                records[i].telephone = records[i].Employer.telephone
            }
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onJobSelected: async function (record) {
        let data = record.selected.items[0].data;
        console.log(data.jobId);
        let combo = this.lookupReference('grdJobApplications');
        let response = await Ext.Ajax.request({ url: '/jobApplication?jobId=' + data.jobId, method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            for (let i = 0; i < records.length; i++) {
                records[i].fullName = records[i].Worker.firstName + ' ' + records[i].Worker.lastName;
                records[i].telephone = records[i].Worker.telephone;
            }
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onEditJobApplication: async function () {
        let application = this.lookupReference("grdJobApplications").getSelection();
        if (application.length > 0) {
            Ext.create('Ext.window.Window', {
                title: 'Job Application Status Update',
                height: 200,
                modal: true,
                width: 400,
                layout: 'fit',
                items: {
                    xtype: 'form',
                    border: false,
                    reference: 'form',
                    layout: 'anchor',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Job Name',
                            bind: '{jobName}',
                            value: application[0].data.Job.jobName
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Application Id',
                            bind: '{jobApplicationId}',
                            value: application[0].data.jobApplicationId,
                            hidden: true
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: 'Status',
                            anchor: '100%',
                            valueFied: 'id',
                            displayField: 'name',
                            bind: '{jobApplicationId}',
                            store: {
                                data: [
                                    { "id": true, "name": 'Approved' },
                                    { "id": false, "name": 'Rejected' }
                                ]
                            }
                        },
                    ],
                    buttons: [
                        {
                            text: 'Save',
                            iconCls: 'x-fa fas fa-save',
                            handler: function () {
                                let data = this.up('form')/*.getForm()*///.getViewModel();
                                console.log(data)

                            }
                        }
                    ]
                }
            }).show();
        } else {
            Ext.Msg.alert('Status', 'Please Select a job application to update. Thank you.');
        }
    }
});
