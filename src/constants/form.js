export const GENDER = {
    MALE: { value: 'MALE', label: 'Male', },
    FEMALE: { value: 'FEMALE', label: 'Female', },
    NOT_SPECIFIC: { value: 'NOT_SPECIFIC', label: 'Not Specific', },
};

export const GENDER_OPTIONS = [
    GENDER.MALE,
    GENDER.FEMALE,
    GENDER.NOT_SPECIFIC,
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
        helpText: '*require this field',
        placeholder: 'e.g. John Wick',
        maxLength: 50,
        require: true,
    },
    {
        label: 'Email *',
        name: 'email',
        type: 'email',
        helpText: '*require this field',
        placeholder: 'e.g. info@mail.org',
        maxLength: 50,
        require: true,
    },
    {
        label: 'Contact Number *',
        name: 'contactNo',
        type: 'tel',
        placeholder: 'e.g. 000-000-000',
        helpText: '*require this field',
        autoCapitalize: 'characters',
        maxLength: 20,
        require: true,
    },
    {
        label: 'Gender',
        name: 'gender',
        type: 'select',
        helpText: 'optional field',
        options: GENDER_OPTIONS,
        require: false,
    },
    {
        label: 'Address',
        name: 'address',
        type: 'textarea',
        placeholder: 'e.g. 221B Baker Street, London',
        helpText: 'optional field',
        maxLength: 275,
        require: false,
    }
];