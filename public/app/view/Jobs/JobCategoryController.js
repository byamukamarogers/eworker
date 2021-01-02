Ext.define('eworker.view.jobs.JobCategoryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobs-jobcategory',
    onAfterRender: async function () {
        let data = this.getView().formData;
        if (data) {
            this.getViewModel().setData(data);
            this.lookupReference('complaint').setValue(data.complaint);
        }
        await this.loadJobCategory();
    },
    loadJobCategory: async function () {
        let combo = this.lookupReference('grdJobCategory');
        let response = await Ext.Ajax.request({ url: '/jobcategory', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onSaveClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
    },
    onEditJobCategory: async function () {

        let selection = this.lookupReference('grdJobCategory').getSelection();
        if (selection.length) {
            let data = selection[0].data;
            this.getViewModel().setData(data);
        } else {
            Ext.Msg.alert('Error', 'Please select a record');
        }
    },

    cleanupData: function (rawData) {
        let data = {};
        for (let key in rawData) {
            let type = typeof rawData[key]
            if (['string', 'number', 'date'].includes(type)) {
                data[key] = rawData[key];
            }
        }
        return data;
    },

    saveData: async function (rawData) {
        let form = this.getView();
        let data = this.cleanupData(rawData);
        console.log(data)
        let response = await Ext.Ajax.request({
            url: '/jobcategory',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });

        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('E-Worker', 'Data has been successfully saved');
                this.loadJobCategory();
                let parent = this.lookupReference('jobCategoryForm').getForm().reset();
            }
        }
    }

});
