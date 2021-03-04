Ext.define('eworker.view.Staff.StaffViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.staffview',

    onAfterRender: async function () {
        this.loadData();
    },

    onOkClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
    },

    loadData: async function () {
        this.loadLists();
    },

    cleanupData: function (rawData) {
        let data = {};
        
        for (let key in rawData) {
            let type = typeof rawData[key]
            if (!['object'].includes(type)) {
                data[key] = rawData[key];
            }
        }
        
        return data;
    },
    saveData: async function (rawData) {
        let form = this.getView();
        let data = this.cleanupData(rawData);  
        let response = await Ext.Ajax.request({
            url: '/staff',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('E-Worker', 'Data has been successfully saved');
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },

    loadStaffMemeber: async function (staffId) {
        let response = await Ext.Ajax.request({ url: '/staffmember/?staffid=' + staffId, method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            this.getViewModel().setData(records);
        }
    },

    loadLists: async function () {
        this.loadStaffTypes();
    },
    loadStaffTypes: async function () {
        let combo = this.lookupReference('cboStaffTypes');
        let response = await Ext.Ajax.request({ url: '/stafftypes', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    }
});
