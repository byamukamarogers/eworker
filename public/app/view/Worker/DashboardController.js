Ext.define('eworker.view.Worker.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.worker-dashboard',
    onAfterRender: async function(){
        if(eworker.Globals.currentUser.accountTypeId === 3){
            let data = eworker.Globals.currentUser;
        this.getViewModel().setData(data);
        }

    },
    onUpdateInfo: async function(){
        let data = this.getViewModel().getData()
            
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
    }
});
