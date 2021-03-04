Ext.define('eworker.view.Jobs.JobPostFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobs-jobpostform',
    onAfterRender: async function () {
        let data = this.getView().formData;
        if (data) {
            this.getViewModel().setData(data);
        }
        await this.loadJobType();
    },
    loadJobType: async function(){
        let combo = this.lookupReference('cmbJobType');
        let response = await Ext.Ajax.request({ url: '/JobType', method: 'get' });
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
    
    cleanupData: function (rawData) {
        let data = {};
        for (let key in rawData) {
            let type = typeof rawData[key]
            if (key.includes('date') || key.includes('Date') || !['object'].includes(type)) {
                data[key] = rawData[key];
            }
        }
        return data;
    },

    saveData: async function (rawData) {
        let form = this.getView();
        let data = this.cleanupData(rawData);
        console.log(data);
        let response = await Ext.Ajax.request({
            url: '/job',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });

        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('E-Worker', 'Data has been successfully saved',);
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    }


});
