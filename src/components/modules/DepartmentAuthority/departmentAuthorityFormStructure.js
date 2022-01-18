const form = [
    [
        { label: 'Title of Report', name: 'title', portion: 12, inputType: 'textarea' }
    ],
    [
        {
            label: 'Responsible Person',
            name: 'name',
            formControl: 'select',
            portion: 12,
            options: [{}]
        }
    ],
    [
        { label: 'Role', name: 'role', portion: 12, inputType: 'text' }
    ],
    [
        {
            label: 'Submitted to',
            name: 'submittedTo',
            formControl: 'select',
            portion: 12,
            options: [
                { label: 'Office of the District Engineer', value: 'Office of the District Engineer' },
                { label: 'Commission on Audit', value: 'Commission on Audit' },
                { label: 'COA-GAS', value: 'COA-GAS' },
                { label: 'Department of Budget and Management', value: 'Department of Budget and Management' },
                { label: 'Department of Budget and Bureau of Internal Revenue', value: 'Department of Budget and Bureau of Internal Revenue' },
                { label: 'Government Procurement Policy Board', value: 'Government Procurement Policy Board' }
            ]
        }
    ],
    [
        {
            label: 'Type of Submission',
            name: 'submissionType',
            formControl: 'select',
            portion: 12,
            options: [
                { label: 'Weekly', value: 'Weekly' },
                { label: 'Monthly', value: 'Monthly' },
                { label: 'Yearly', value: 'Yearly' }
            ]
        }
    ],
    [
        { label: 'Due Date', name: 'dueDate', portion: 12, formControl: 'datePicker', isReadOnly: false }
    ]
    // [
    //     {
    //         label: 'Reason for Time Extension',
    //         name: 'reasonForTimeExtension',
    //         formControl: 'select',
    //         portion: 6,
    //         options: [
    //             { label: 'Due to Rainy/Unworkable Days', value: 'Due to Rainy/Unworkable Days' },
    //             { label: 'Due to Road Right of Way Problem', value: 'Due to Road Right of Way Problem' },
    //             { label: 'Due to Peace and Order', value: 'Due to Peace and Order' },
    //             { label: 'Due to Delay in Payment of Contractor\'s Claim for Progress Billing/s', value: 'Due to Delay in Payment of Contractor\'s Claim for Progress Billing/s' },
    //             { label: 'Due to Failure of the Government to Provide Necessary Contruction Plans and/or Drawings', value: 'Due to Failure of the Government to Provide Necessary Contruction Plans and/or Drawings' },
    //             { label: 'Due to Non-Availability of Construction Materials', value: 'Due to Non-Availability of Construction Materials' },
    //             { label: 'Due to Effect of Force Majeure', value: 'Due to Effect of Force Majeure' },
    //             { label: 'Due to Inaccessibility to Project', value: 'Due to Inaccessibility to Project' },
    //             { label: 'Due to Obstruction', value: 'Due to Obstruction' },
    //             { label: 'Due to Absence of MMDA Permit/Clearance for Road Repair/Excavation/Traffic Clearance', value: 'Due to Absence of MMDA Permit/Clearance for Road Repair/Excavation/Traffic Clearance' },
    //             { label: 'Due to Absence of LGU Permit/Clearance / Homeowners Association Clearance/Permit', value: 'Due to Absence of LGU Permit/Clearance / Homeowners Association Clearance/Permit' },
    //             { label: 'Due to DENR Clearance/Permit to Cut/Remove Trees within the Road-Right-of-Way', value: 'Due to DENR Clearance/Permit to Cut/Remove Trees within the Road-Right-of-Way' },
    //             { label: 'Delayed Delivery of Imported Materials due to Truck Ban and/or Port Congestion', value: 'Delayed Delivery of Imported Materials due to Truck Ban and/or Port Congestion' },
    //             { label: 'Due to Revision of Plan/Design', value: 'Due to Revision of Plan/Design' },
    //             { label: 'Epidemic(s)', value: 'Epidemic(s)' },
    //             { label: 'Due to Meritorious Cirmcumstances', value: 'Due to Meritorious Cirmcumstances' },
    //             { label: 'Due to Non-release or Insufficient release of funds for contracts with MYOA or MYCA only', value: 'Due to Non-release or Insufficient release of funds for contracts with MYOA or MYCA only' }
    //         ]
    //     },
    //     {
    //         label: 'Approved By',
    //         name: 'approvedBy',
    //         formControl: 'select',
    //         portion: 6,
    //         options: [
    //             { label: 'One', value: 'One' },
    //             { label: 'Two', value: 'Two' },
    //             { label: 'Three', value: 'Three' }
    //         ]
    //     }
    // ],
    // [
    //     { label: 'Duration (CDs)', name: 'duration', portion: 6, isReadOnly: true, inputType: 'number' },
    //     {
    //         label: 'Designation',
    //         name: 'designation',
    //         formControl: 'select',
    //         portion: 6,
    //         options: [
    //             { label: 'One', value: 'One' },
    //             { label: 'Two', value: 'Two' },
    //             { label: 'Three', value: 'Three' }
    //         ]
    //     }
    // ],
    // [
    //     { label: 'Additonal Duration (CDs)', name: 'additionalDuration', portion: 6, inputType: 'number' },
    //     { label: 'Date Approved', name: 'dateApproved', portion: 6, formControl: 'datePicker', isReadOnly: true }
    // ],
    // [
    //     {
    //         label: 'Status',
    //         name: 'status',
    //         formControl: 'select',
    //         portion: 6,
    //         options: [
    //             { value: 'For Approval', label: 'For Approval' },
    //             { value: 'Approved', label: 'Approved' },
    //             { value: 'Disapproved', label: 'Disapproved' }
    //         ]
    //     }
    // ],
    // [
    //     { label: 'In lieu of Suspension Order', name: 'withSuspensionOrder', formControl: 'checkbox', portion: 6 }
    // ]
];

export default form;
