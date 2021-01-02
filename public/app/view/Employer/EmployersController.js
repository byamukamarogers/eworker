Ext.define('eworker.view.Employer.EmployersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employer-employers',
    onAfterRender: async function () {
        this.loadEmployers();
    },

    loadEmployers: async function () {
        let combo = this.lookupReference('grdEmployers');
        let response = await Ext.Ajax.request({ url: '/employer', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            for (let i = 0; i < records.length; i++) {
                records[i].fullName = records[i].firstName + ' ' + records[i].lastName;
            }
            let store = Ext.create('Ext.data.Store', { data: records });
            combo.setStore(store);
            store.load();
        }
    },
    onEditEmployer: async function () {

        let selection = this.lookupReference('grdEmployers').getSelection();
        if (selection.length) {
            let data = selection[0].data;
            Ext.create('Ext.window.Window', {
                modal: true,
                title: 'Edit EMPLOYER INFO',
                layout: 'fit',
                autoShow: true,
                items: [
                    {
                        header: false,
                        xtype: 'employerRegForm',
                        formData: data
                    }
                ]
            })
        } else {

            Ext.Msg.alert('Error', 'Please select a record');
        }
    },
    onAddEmployer: async function () {
        Ext.create('Ext.window.Window', {
            modal: true,
            title: 'ADD NEW EMPLOYER',
            //width: 'fit',
            layout: 'fit',
            autoShow: true,
            items: [
                {
                    header: false,
                    xtype: 'employerRegForm'
                }
            ]
        })
    },
    onGridSearch: async function (field, evt, eOpts) {
        let searchString = field.getValue();
        let store = this.lookupReference('grdEmployers').getStore();
        if (searchString) {
            store.setFilters(
                {
                    property: 'fullName',
                    value: searchString,
                    anyMatch: true,
                    caseSensitive: false
                }
            );
        } else {
            this.m();
        }
    }


});
