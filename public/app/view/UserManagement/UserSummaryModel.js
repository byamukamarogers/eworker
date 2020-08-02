Ext.define('eworker.view.UserManagement.UserSummaryModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersummary',
    data: {
        staffId: null,
        healthUnitId: null,
        firstName: null,
        lastName: null,
        departmentId: null,
        email: null,
        phone1: null,
        password: null,
        userId: null,
        createDate: null,
        createdBy: null,
        readOnly: true
        
    }

});
