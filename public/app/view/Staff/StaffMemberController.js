Ext.define('eworker.view.Staff.StaffMemberController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.staffmember',

    onAfterRender: async function () {
        let isReadOnly = this.getView().isReadOnly;
        this.lookupReference('btnOK').setHidden(isReadOnly);
        this.lookupReference('btnCancel').setHidden(isReadOnly);
        await this.loadLists();
        let data = this.getView().frmData;
        //console.log(data)
        if (data) {
            this.getViewModel().setData(data);

        }
    },
    loadLists: async function () {
        await this.loadStaffTypes();
    },

    loadStaffTypes: async function () {
        let response = await Ext.Ajax.request({
            url: '/stafftypes',
            method: 'get'
        });
        if (response.responseText) {
            let records = response.responseText;
            records = JSON.parse(records);
            let combo = this.lookupReference('cboStaffTypes')
            let store = Ext.create('Ext.data.Store', {
                data: records
            });
            store.load();
            combo.setStore(store);
        }
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

    onOKClicked: function () {
        let data = this.getViewModel().getData();
        let me = this;
        let record = this.cleanupData(data);
        record = Ext.JSON.encode(record);
        Ext.Ajax.request({
            url: '/staffmember',
            method: 'POST',
            params: record,
            headers: { 'Content-Type': 'application/json' },
            success: function (res, opts) {
                Ext.Msg.alert('E-Worker', 'Data has been successfully saved');
                me.fireEvent('StaffSaved', record);
                let parent = me.getView().up('container');
                if (parent) {
                    parent.close();
                }
                this.close();
                //parent.lookupReference('grdStaffMembers').refresh();

            },
            failure: function (res, opts) {
                console.log(res.responseText.error);
            }

        });
    },
    onCancelClicked: function () {
        let window = this.getView().up('window');

        if (window)
            window.close();
        else
            this.getView().destroy();

    }
});
