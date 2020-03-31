import * as Yup from 'yup';


export const yupRegObj = Yup.object({
    fullname: Yup.string()
        .max(20, '* Must be 15 characters or less')
        .min(3, 'must be more than 3 characters')
        .required('* Required'),
    email: Yup.string()
        .email('* Invalid email address')
        .required('* Required'),
    county: Yup.string()
        .required('* Required'),
    company: Yup.string()
        .required('* Required'),
    phone: Yup.string()
        .required('* Required'),
    password: Yup.string()
        .min(8, '* must be more than 8 characters')
        .required('* Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('* Required'),
    })

export const yupLoginObj = Yup.object({
    loginEmail: Yup.string()
        .email('* Invalid email address')
        .required('* Required'),
    loginPassword: Yup.string()
        .max(20, '* Must be 20 characters or less')
        .required('* Required'),
    })