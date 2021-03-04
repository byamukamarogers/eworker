Ext.define('eworker.view.UserManagement.UserRegistrationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userregistration',

    onAfterRender: async function () {
        this.loadStaffMembers();


    },
    loadStaffMembers: async function () {
        let grd = this.lookupReference('grdStaff');
        let response = await Ext.Ajax.request({ url: '/staff', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            grd.setStore(store);
            store.load();
        }

    },
    onUserSelected: async function (sender, record, opts) {
        let data = record.data;
        let parent = this.getView().up('panel');
        if (parent) {
            let form = this.lookupReference('user-summary');
            form.getViewModel().setData(data);
            console.log(form.getViewController());
            form.getController().loadUserRoles(data.staffId);
            let username = form.lookupReference('username');
            let passwd = form.lookupReference('passwd');
           

            //default the email as loginId but allow to be edited
            if (data.email !== null && data.email !== '') {
                username.setValue(data.email);
            }
            else {
                username.setValue(null);
            }
            username.setReadOnly(false);
            passwd.setReadOnly(false);
            form.lookupReference('btnOK').setDisabled(false);
            form.lookupReference('btnCancel').setDisabled(false);
        }
    }

});
