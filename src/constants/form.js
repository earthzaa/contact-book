export const GENDER_OPTIONS = [
    { value: 'MALE', label: 'Male', },
    { value: 'FEMALE', label: 'Female', },
    { value: 'NOT_SPECIFIC', label: 'Not Specific', },
];

export const INPUTS = [
    {
        label: 'Upload Background',
        name: 'bgPic',
        type: 'file',
        helpText: '800x200 px',
        require: false,
    },
    {
        label: 'Upload Picture',
        name: 'profilePic',
        type: 'file',
        helpText: '90x90 px',
        require: false,
    },
    {
        label: 'Name *',
        name: 'name',
        type: 'text',
        helpText: 'require',
        placeholder: 'eg. John Wick',
        maxLength: 50,
        require: true,
    },
    {
        label: 'Email *',
        name: 'email',
        type: 'email',
        helpText: 'require',
        placeholder: 'eg. info@mail.org',
        maxLength: 50,
        require: true,
    },
    {
        label: 'Contact Number *',
        name: 'contactNo',
        type: 'text',
        placeholder: 'eg. 000-000-000',
        helpText: 'require',
        maxLength: 20,
        require: true,
    },
    {
        label: 'Gender',
        name: 'gender',
        type: 'select',
        helpText: 'select only',
        options: GENDER_OPTIONS,
        require: false,
    },
    {
        label: 'Address',
        name: 'address',
        type: 'textarea',
        placeholder: 'eg. 000 baker street',
        helpText: 'text only',
        maxLength: 275,
        require: false,
    }
];