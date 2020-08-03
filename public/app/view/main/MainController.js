/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('eworker.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onBeforeRender: async function () {
        try {
            let response = await Ext.Ajax.request({ url: `/users/currentuser` });
            if (response.responseText) {
                let user = JSON.parse(response.responseText);
                //eworker.Globals.currentUser = user;
                this.getViewModel().setData({ fullName: user.fullName.toUpperCase() })
            } else {
                window.location.assign('/login');
            }
        } catch (err) {
            console.log(err);
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
            xtype: 'userList', autoShow: true
        });
    },
    onRegisterEmployer: function () {
        Ext.ComponentQuery.query('#centerPanel')[0].removeAll(true);
        Ext.ComponentQuery.query('#centerPanel')[0].add({
            xtype: 'userRegistrationForm', autoShow: true
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

    onLogoutClicked: async function () {
        await Ext.Ajax.request({ url: '/users/logout' });
        window.location.assign('/login');
        Ext.state.Manager.clearAll();

    }
});
