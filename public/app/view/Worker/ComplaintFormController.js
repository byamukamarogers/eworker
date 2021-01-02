Ext.define('eworker.view.worker.ComplaintFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.worker-complaintform',
    onAfterRender: async function () {
        let data = this.getView().formData;
        if (data) {
            this.getViewModel().setData(data);
            this.lookupReference('complaint').setValue(data.complaint);
        }
    },
    onSaveClicked: async function () {
        let complaint = this.lookupReference('complaint').getValue();
        this.getViewModel().setData({ "complaint": complaint });
        let data = this.getViewModel().getData();
        this.saveData(data);
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
        let data = rawData;
        console.log(rawData)
        let response = await Ext.Ajax.request({
            url: '/complaint',
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
