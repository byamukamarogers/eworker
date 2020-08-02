Ext.define('eworker.view.Staff.StaffMemberModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.staffmember',
    data: {
        staffId: null,
        firstName: null,
        lastName: null,
        gender: null,
        address: null,
        phone1: null,
        phone2: null,
        staffTypeId: null,
        clinicianTypeId: null,
        departmentId: null,
        healthUnitId: null,
        createdBy: null
    }

});
