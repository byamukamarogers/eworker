Ext.define('eworker.view.Staff.StaffRegistryController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.staffregistry',

    requires: ['eworker.view.Staff.StaffMember'],

    init: function () {
        this.listen({
            controller: {
                '*': {
                    StaffSaved: 'onStaffSaved'
                }
            }
        });
    },

    onStaffSaved: function (staff) {
        //let grid = this.lookupReference('grdStaffMembers');
        //grid.insertLast(staff)
        this.loadStaffMembers();
    },

    onAfterRender: function () {
        this.loadStaffMembers();
    },

    loadStaffMembers: async function () {
        let grd = this.lookupReference('grdStaffMembers');
        let response = await Ext.Ajax.request({ url: '/staff', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            grd.setStore(store);
            store.load();
        }

    },

    onAddStaffMember: function () {
        let form = Ext.create({ xtype: 'staff-member' });
        let window = Ext.create('Ext.window.Window', {
            title: 'Add New Staff Member',
            width: 400,
            id: 'container',
            closable: true,
            layout: 'fit',
            items: [form]
        });
        window.show();
    },
    onEditStaffMember: function () {
        let form = Ext.create({ xtype: 'staff-member', frmData: this.data });
        let window = Ext.create('Ext.window.Window', {
            title: 'Edit Staff',
            width: 400,
            id: 'container',
            closable: true,
            layout: 'fit',
            items: [form]
        });
        window.show();
    },

    onStaffMemberSelected: function (sender, record, opts) {
        this.data = record.data;
        //console.log(this.data);
        form = this.lookupReference('staffForm');
        form.getViewModel().setData(this.data);
    }

});
