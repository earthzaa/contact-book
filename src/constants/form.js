export const GENDER_OPTIONS = [
    { value: 'MALE', label: 'Male', },
    { value: 'FEMALE', label: 'Female', },
    { value: 'NOT_SPECIFIC', label: 'Not Specific', },
];

export const INPUTS = [
    {
        label: 'Background Picture',
        name: 'bgPic',
        type: 'file',
        helpText: '800x200 px',
    },
    {
        label: 'Contact Picture',
        name: 'profilePic',
        type: 'file',
        helpText: '90x90 px',
    },
    {
        label: 'Name *',
        name: 'name',
        type: 'text',
        helpText: 'require',
        placeholder: 'eg. John Wick',
        maxLength: 50,
    },
    {
        label: 'Email *',
        name: 'email',
        type: 'email',
        helpText: 'require',
        placeholder: 'eg. info@mail.org',
        maxLength: 50,
    },
    {
        label: 'Contact Number *',
        name: 'contactNo',
        type: 'text',
        placeholder: 'eg. 000-000-000',
        helpText: 'require',
        maxLength: 20,
    },
    {
        label: 'Gender',
        name: 'gender',
        type: 'select',
        helpText: 'select only',
        options: GENDER_OPTIONS,
    },
    {
        label: 'Address',
        name: 'address',
        type: 'textarea',
        placeholder: 'eg. 000 baker street',
        helpText: 'text only',
        maxLength: 275,
    }
];