/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('eworker.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
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

    onLogoutClicked: async function () {
        await Ext.Ajax.request({ url: '/users/logout' });
        window.location.assign('/login');
        Ext.state.Manager.clearAll();

    }
});
