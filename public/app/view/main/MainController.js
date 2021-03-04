Ext.define('eworker.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onBeforeRender: async function () {
        try {
            let response = await Ext.Ajax.request({ url: `/users/currentuser` });
            if (response.responseText) {
                let user = JSON.parse(response.responseText);
                eworker.Globals.currentUser = user;
                console.log(eworker.Globals)
                this.getViewModel().setData(user);
                this.getViewModel().setData({ fullName: user.fullName.toUpperCase() })
            } else {
                window.location.assign('/login');
            }
        } catch (err) {
            console.log(err);
        }
        this.applyPermissions();

    },
    applyPermissions: function () {
        let vm = this.getViewModel();
        if(eworker.Globals.currentUser.accountTypeId === 1){
            this.lookupReference("workerProfileMenu").setHidden(true);
        }else if(eworker.Globals.currentUser.accountTypeId === 2){
            console.log(this.lookupReference("staffMenu"))
            this.lookupReference("staffMenu").setHidden(true);
            this.lookupReference("workerMenu").setHidden(true);
            this.lookupReference("adminMenu").setHidden(true);
            this.lookupReference("jobCategoryMenu").setHidden(true);
            this.lookupReference("workerProfileMenu").setHidden(true);
        }else{
            this.lookupReference("staffMenu").setHidden(true);
            this.lookupReference("employerMenu").setHidden(true);
            this.lookupReference("adminMenu").setHidden(true);
            this.lookupReference("jobCategoryMenu").setHidden(true);
            this.lookupReference("workersMenu").setHidden(true);
            this.lookupReference("jobMenu").setHidden(true);
        }
    },
    onAccountTypeSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'acountType', autoShow: true
        });
    },
    onSearchWorkerSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'workersList', autoShow: true
        });
    },
    onRegisterEmployer: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'employerRegForm', autoShow: true
        });
    },
    onEmployerListSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'employerList', autoShow: true
        });
    },
    onStaffSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'staff-registry', autoShow: true
        });
    },
    onSearchUserSelected: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'user-management', autoShow: true
        });
    },
    onWorkersListSelect: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'workersList', autoShow: true
        });
    },
    onRegisterWorker: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype:'workerRegistrationForm', autoShow: true
        });
    },
    onComplaintsSelect: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype:'worker-complaints', autoShow: true
        });
    },
    onJobSelect: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'jobs-list', autoShow: true
        });
    },
    onJobCategorySelect: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'jobcategory', autoShow: true
        });
    },
    onJobApplicationsSelect: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'applications', autoShow: true
        });
    },
    onMyJobApplicationsSelect: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'myJobApplications', autoShow: true
        });
    },
    onViewStaffSelect: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'staff-registry', autoShow: true
        });
    },
    onStaffTypeSelect: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'staffType', autoShow: true
        });
    },
    onProfileClick: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'workerProfile', autoShow: true
        });
    },

    onLogoutClicked: async function () {
        await Ext.Ajax.request({ url: '/users/logout' });
        window.location.assign('/login');
        Ext.state.Manager.clearAll();

    }
});
