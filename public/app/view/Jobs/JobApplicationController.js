Ext.define('eworker.view.Jobs.JobApplicationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobs-jobapplication',
    onAfterRender: async function(){
        let data = this.getView().formData;
        if(data){
            this.getViewModel().setData(data);
        }
    }

});
