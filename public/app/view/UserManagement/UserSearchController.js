Ext.define('eworker.view.UserManagement.UserSearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usersearch',

    onAfterRender: async function () {
        this.loadUsers();
    },


    onFindClicked: async function () {
        let value = this.lookupReference('txtFind').value;
        let searchtype = this.lookupReference('cboSearchType').value;
        let grd = this.lookupReference('grdUsers');

        if (!value) {
            Ext.Msg.alert('User Register', 'Please enter a search value');
            return;
        }
        if (!searchtype) {
            Ext.Msg.alert('User Register', 'Please select a search by type');
            return;
        }

        let response = await Ext.Ajax.request({
            url: '/usersearch?searchtype=' + searchtype + '&val=' + value,
            method: 'get'
        });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            grd.setStore(store);
            store.load();
        }

    },

    loadUsers: async function () {        
        let grd = this.lookupReference('grdUsers');
        let response = await Ext.Ajax.request({
            url: '/users',
            method: 'get'
        });
        
        if (response) {
            let records = response.responseText;
            records = JSON.parse(records);
            let store = Ext.create('Ext.data.Store', {
                data: records
            });
           
            store.load();
            grd.setStore(store);

        }
    },
    onUserSelected: async function (sender, record, opts) {
        this.data = record.data;

        let parent = this.getView().up('panel');
        if (parent) {
            let form = parent.lookupReference('user-summary');
            form.getViewModel().setData(this.data);
            form.getController().loadUserRoles(this.data.staffId);
        }
    },


    

    onNewUser: async function () {
       
            let form = Ext.create({ xtype: 'user-registration-form'});
            Ext.create('Ext.window.Window', {
                modal: true,
                title: 'Add New User',
                width: '90%',
                autoShow: true,
                items: [form]
            })
    }


});

