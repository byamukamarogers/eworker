Ext.define('eworker.view.jobs.jobDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.jobs-jobdetails',
    onAfterRender: async function(){
        let data = this.getView().formData
        if(data){
            this.getViewModel().setData(data);
        }
    }

});
