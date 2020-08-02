Ext.define('eworker.view.UserManagement.UserSummaryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usersummary',

    onAfterRender: async function () {
        this.loadUserRoles();
        this.loadDepartments();
    },

    loadDepartments: async function () {
        let response = await Ext.Ajax.request({
            url: '/departments',
            method: 'get'
        });
        if (response) {
            let records = response.responseText;
            records = JSON.parse(records);
            let combo = this.lookupReference('cboDepartments')
            let store = Ext.create('Ext.data.Store', {
                data: records
            });
            store.load();
            combo.setStore(store);
        }
    },

    onOKClicked: async function () {
        let store = this.lookupReference('grdUserPermissions').getStore();
        let data = [];
        store.data.items.forEach(item => {
            data.push(item.data);
        });
        let response = await Ext.Ajax.request({
            url: '/userpermissions',
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        if (response.responseText) {
            let results = JSON.parse(response.responseText);
            if (results.success) {
                Ext.Msg.alert('NHIS', 'User Permissions saved successfully'); 
            }
        }
    },

    loadUserRoles: async function (id) {
        if (!id) return; 
        let response = await Ext.Ajax.request({
            //url: '/userroles', -- Loading from user permissions instead
            url:`/userpermissions?staffid=${id}`,
            method: 'get'
        });

        if (response) {
            let records = response.responseText;
            records = JSON.parse(records);
            let grd = this.lookupReference('grdUserPermissions')
            let store = Ext.create('Ext.data.Store', {
                data: records
            });
            //grd.clearValue();
            grd.setStore(store);
            store.load();
        }
    }


});
