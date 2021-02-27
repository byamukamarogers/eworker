Ext.define('eworker.view.UserManagement.UserSummaryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usersummary',

    onAfterRender: async function () {
       // this.loadUserRoles();
       let data = this.getViewModel().getData();
       console.log(data);
       if(data.userId){
           await this.loadRoles(data.userId);
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
                Ext.Msg.alert('E-WORKER', 'User Permissions saved successfully'); 
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
    },

    loadRoles: async function (userid) { 
        let grd = this.lookupReference('grdUserPermissions');
        let response = await Ext.Ajax.request({
            url:`/userpermissions?userId=`+userid,
            method: 'get'
        });

        if (response) {
            let records = JSON.parse(response.responseText);
            for(let i =0; i<records.length; i++){
                records[i].write = records[i].UserPermission.write;
                records[i].edit = records[i].UserPermission.edit;
                records[i].readOnly = records[i].UserPermission.readOnly;
            }
            let store = Ext.create('Ext.data.Store', { data: records });
            grd.setStore(store);
            store.load();
        }
    }


});
