Ext.define('eworker.view.Jobs.JobController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobs-job',
    onAfterRender: async function () {
        this.loadJobs();
        if (eworker.Globals.currentUser.accountTypeId !== 3) {
            this.lookupReference("applyBtn").setDisabled(true);
        }
        if (eworker.Globals.currentUser.accountTypeId === 3) {
            this.lookupReference("onAddJobBtn").setHidden(true);
            this.lookupReference("onEditJobBtn").setHidden(true);
        }

    },

    loadJobs: async function () {
        let combo = this.lookupReference('grdWorkers');
        let response = await Ext.Ajax.request({ url: '/job', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            for (let i = 0; i < records.length; i++) {
                records[i].fullName = records[i].Employer.firstName + ' ' + records[i].Employer.lastName;
                records[i].telephone = records[i].Employer.telephone
                records[i].empAddress = records[i].Employer.address
                records[i].minSalary = records[i].JobType.minSalary
                records[i].maxSalary = records[i].JobType.maxSalary
                records[i].expiryDate = new Date(records[i].expiryDate);
            }
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },

    onEditJob: async function () {
        let selection = this.lookupReference('grdWorkers').getSelection();
        if (selection.length) {
            let data = selection[0].data;
            Ext.create('Ext.window.Window', {
                modal: true,
                title: 'Edit JOB INFO',
                layout: 'fit',
                autoShow: true,
                items: [
                    {
                        header: false,
                        xtype: 'job-post-form',
                        formData: data
                    }
                ]
            })
        } else {

            Ext.Msg.alert('Error', 'Please select a record');
        }
    },
    onAddJob: async function () {
        Ext.create('Ext.window.Window', {
            modal: true,
            title: 'ADD NEW JOB',
            //width: 'fit',
            layout: 'fit',
            autoShow: true,
            items: [
                {
                    header: false,
                    xtype: 'job-post-form'
                }
            ]
        })
    },
    onViewJobDetail: async function () {

        let selection = this.lookupReference('grdWorkers').getSelection();
        if (selection.length) {
            let data = selection[0].data;
            console.log(data);
            Ext.create('Ext.window.Window', {
                modal: true,
                title: 'JOB DETAILS',
                width: '70%',
                autoShow: true,
                items: [
                    {
                        header: false,
                        xtype: 'jobDetails',
                        formData: data
                    }
                ]
            })

        } else {

            Ext.Msg.alert('Error', 'Please select a record');
        }
    },
    onApplyJob: async function () {
        let selection = this.lookupReference('grdWorkers').getSelection();
        if (selection.length) {
            let data = selection[0].data;
            console.log(data);
            this.saveData(data);
        } else {

            Ext.Msg.alert('Error', 'Please select a record');
        }
    },
    onGridSearch: async function (field, evt, eOpts) {
        let searchString = field.getValue();
        let store = this.lookupReference('grdWorkers').getStore();
        if (searchString) {
            store.setFilters(
                {
                    property: 'fullName',
                    value: searchString,
                    anyMatch: true,
                    caseSensitive: false
                }
            );
        } else {
            this.loadJobs();
        }
    },

    saveData: async function (rawData) {
        let form = this.getView();
        let data = rawData;
        let response = await Ext.Ajax.request({
            url: '/jobApplication',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });

        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('E-Worker', 'Data has been successfully saved');
            }
        }
    }

});
