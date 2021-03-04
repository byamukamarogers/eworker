Ext.define('eworker.view.Staff.StaffTypeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-stafftype',
    onAfterRender: async function () {
        this.loadStaffTypes();
    },

    loadStaffTypes: async function () {
        let gridstore = this.lookupReference('grdStaffTypes');
        let response = await Ext.Ajax.request({ url: '/stafftypes', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            gridstore.setStore(store);
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
            if (['string', 'number', 'date'].includes(type)) {
                data[key] = rawData[key];
            }
        }
        return data;
    },

    saveData: async function (rawData) {
        let form = this.getView();
        let data = this.cleanupData(rawData);
        let response = await Ext.Ajax.request({
            url: '/stafftype',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });

        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('E-Worker', 'Data has been successfully saved');
                this.loadStaffTypes();
                let form2  = this.lookupReference('accountTypeForm');
                form2.getForm().reset();
            }
        }
    },

});
