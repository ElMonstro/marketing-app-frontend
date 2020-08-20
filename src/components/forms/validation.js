import * as Yup from 'yup';

export const yupNewGroupObj = Yup.object({
    groupName: Yup.string()
        .required('* Required'),
    description: Yup.string()
        .required('* Required'),
    })

    export const yupNewMemberObj = Yup.object({
        firstName: Yup.string()
            .required('* Required'),
        secondName: Yup.string()
            .required('* Required'),
        phoneNumber: Yup.string()
            .required('* Required'),
        })

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
    email: Yup.string()
        .email('* Invalid email address')
        .required('* Required'),
    password: Yup.string()
        .required('* Required'),
    })

export const yupSendSMSObj = Yup.object({
    receipients: Yup.array(),
    groups: Yup.array(),
    message: Yup.string()
        .required('* Required'),
    })

    export const phoneNumberIsValid = (rule, value, callback) => {
    if (!value) {
      callback();
    } else {
       
        if (!value.match(/^\d{9}$/g)) {
            callback(new Error("Enter correct format(9 digits): e.g 723456897"));
        }
      
    }
   
  
}