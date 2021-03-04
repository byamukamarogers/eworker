Ext.define('eworker.view.Employer.EmployerRegistrationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employer-employerregistrationform',
    onAfterRender: async function () {
        let data = this.getView().formData;
        if (data) {
            this.getViewModel().setData(data);
            this.lookupReference('txtPassword').setHidden(true);
            this.lookupReference('txtEmail').setEditable(false);
        }
    },
    onSaveClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
    },

    cleanupData: function (rawData) {
        let data = {};
        for (let key in rawData) {
            let type = typeof rawData[key]
            if (['string', 'number', 'date'].includes(type)) {
                data[key] = rawData[key];
            }
        }
        return data;
    },

    saveData: async function (rawData) {
        let form = this.getView();
        let data = this.cleanupData(rawData);
        let response = await Ext.Ajax.request({
            url: '/employer',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });

        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('E-Worker', 'Data has been successfully saved',);
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    }

});
