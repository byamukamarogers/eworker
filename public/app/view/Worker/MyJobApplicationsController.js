Ext.define('eworker.view.Worker.MyJobApplicationsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.worker-myjobapplications',
    onAfterRender: async function () {
        let data = this.getView().formData;
        if (data) {
            this.getViewModel().setData(data);
        }
        await this.loadJobApplications(eworker.Globals.currentUser.user_id);
    },
    loadJobApplications: async function (workerId) {
        let combo = this.lookupReference('grdJobApplications');
        let response = await Ext.Ajax.request({ url: '/jobApplication?workerId='+workerId, method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            console.log(records)
            for (let i = 0; i < records.length; i++) {
                records[i].jobName = records[i].Job.jobName
                records[i].employerFullName = records[i].Job.Employer.firstName+' '+records[i].Job.Employer.lastName
                records[i].expiryDate = records[i].Job.expiryDate
                records[i].status = (records[i].Job.isApproved)? 'Awarded':'Pending'
            }
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },

});
