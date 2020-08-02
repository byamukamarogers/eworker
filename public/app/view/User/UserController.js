Ext.define('eworker.view.User.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-user',
    onAfterRender: async function () {
        this.loadusers();
    },

    loadusers: async function () {
        let combo = this.lookupReference('grdUsers');
        let response = await Ext.Ajax.request({ url: '/users', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    }

});
