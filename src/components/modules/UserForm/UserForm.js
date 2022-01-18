const form = [
    [
        { label: 'Name', name: 'name', portion: 12, inputType: 'text' }
    ],
    [
        { label: 'Email Address', name: 'email', portion: 12, inputType: 'text' }
    ],
    [
        {
            label: 'Section',
            name: 'section',
            formControl: 'select',
            portion: 12,
            options: [
                { label: 'Office of the District Engineer', value: 'Office of the District Engineer' },
                { label: 'Procurement Unit', value: 'Procurement Unit' },
                { label: 'ICT Unit', value: 'ICT Unit' },
                { label: 'Administrative', value: 'Administrative' },
                { label: 'Construction', value: 'Construction' },
                { label: 'Finance', value: 'Finance' },
                { label: 'Quality Assurance', value: 'Quality Assurance' },
                { label: 'Maintenance', value: 'Maintenance' },
                { label: 'Planning and Design', value: 'Planning and Design' }
            ]
        }
    ],
    [
        { label: 'Username', name: 'username', portion: 12, inputType: 'text' }
    ],
    [
        { label: 'Password', name: 'password', portion: 12, inputType: 'password' }
    ]
    // [
    //     { label: 'Confirm Password', name: 'confirmPassword', portion: 12, inputType: 'password' }
    // ]
];

export default form;
