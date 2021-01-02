Ext.define('eworker.view.Worker.WorkersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.worker-workers',
    onAfterRender: async function () {
        this.loadWorkers();
    },

    loadWorkers: async function () {
        let combo = this.lookupReference('grdWorkers');
        let response = await Ext.Ajax.request({ url: '/worker', method: 'get' });
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
    onEditWorker: async function () {

        let selection = this.lookupReference('grdWorkers').getSelection();
        if (selection.length) {
            let data = selection[0].data;
            Ext.create('Ext.window.Window', {
                modal: true,
                title: 'Edit WORKER INFO',
                layout: 'fit',
                autoShow: true,
                items: [
                    {
                        header: false,
                        xtype: 'workerRegistrationForm',
                        formData: data
                    }
                ]
            })
        } else {

            Ext.Msg.alert('Error', 'Please select a record');
        }
    },
    onAddWorker: async function () {
        Ext.create('Ext.window.Window', {
            modal: true,
            title: 'ADD NEW WORKER',
            //width: 'fit',
            layout: 'fit',
            autoShow: true,
            items: [
                {
                    header: false,
                    xtype: 'workerRegistrationForm'
                }
            ]
        })
    },
    onGridSearch: async function (field, evt, eOpts) {
        let searchString = field.getValue();
        let store = this.lookupReference('grdWorkers').getStore();
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
            this.loadWorkers();
        }
    }

});
