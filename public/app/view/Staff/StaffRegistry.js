
Ext.define('eworker.view.Staff.StaffRegistry', {
    extend: 'Ext.panel.Panel',
    xtype: 'staff-registry',
    requires: [
        'eworker.view.Staff.StaffRegistryController',
        'eworker.view.Staff.StaffRegistryModel'
        //'ehealth.store.StaffMembers'
    ],
    listeners: { afterrender: 'onAfterRender' },
    height: 600,
    margin: 5,
    controller: 'staffregistry',
    viewModel: {
        type: 'staffregistry'
    },
    layout: 'border',
    items: [
        {
            region: 'west',
            title: 'List of Staff',
            xtype: 'panel',
            flex: 0.6,
            split: true,
            collapsible: false,
            margin: '0 5 5 5',
            tbar: [{ text: 'Add', handler: 'onAddStaffMember', iconCls: 'x-fa fa-user', },
            { text: 'Edit', handler: 'onEditStaffMember', iconCls: 'x-fa fa-edit', }
            ],
            items: [
                {
                    xtype: 'grid',
                    scrollable: true,
                    margin: 5,
                    listeners: { select: 'onStaffMemberSelected' },
                    reference: 'grdStaffMembers',

                    columns: [{ text: 'First Name', dataIndex: 'firstName', flex: 0.3, align: 'left' },
                    { text: 'Last Name', dataIndex: 'lastName', flex: 0.3, align: 'left' },
                    {
                        text: 'Staff Type',
                        dataIndex: 'staffTypeName',
                        flex: 0.2,
                        renderer: function (value, metaData, record) {
                            return record.data.StaffType.staffTypeName;
                        },
                        align: 'left'
                    },
                    { text: 'Gender', dataIndex: 'gender', hidden: true },
                    { text: 'Created By', dataIndex: 'createdBy', hidden: true },
                    { text: 'Phone 1', dataIndex: 'phone1', hidden: true },
                    { text: 'Phone 2', dataIndex: 'phone2', hidden: true },
                    { text: 'address', dataIndex: 'address', hidden: true },
                    { text: 'StaffTypeId', dataIndex: 'staffTypeId', hidden: true },
                    { text: 'Staff ID', dataIndex: 'staffId', hidden: true }]
                }
            ]
        },
        {
            region: 'center',
            xtype: 'panel',
            height: 200,
            flex: 0.4,
            margin: '0 5 5 0',
            items: [
                {
                    //xtype: 'staff-member',
                    xtype: 'staff-view',
                    width: '100%',
                    reference: 'staffForm',
                    isReadOnly: true
                }
            ]
        }
    ]
});
