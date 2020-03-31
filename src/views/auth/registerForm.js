import React from 'react';
import { useFormik } from 'formik';

import { yupRegObj } from './validation';


const RegisterForm = (props) => {

    const formik = useFormik({
            initialValues: {
            email: '',
            phone: '',
            fullname: '',
            company: '',
            county: '',
            password: '',
            confirmPassword: '',
            },
            validationSchema: yupRegObj,
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
            },
        });

    return(
        <form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>

        <div className="inputs-wrapper">
            <span className="form-title">Register</span>
        </div>

            <div className="inputs-wrapper">

                <div className="input-container">
                    <div className="input-label">
                    <span >email</span>
                        {formik.touched.email && formik.errors.email ? 
                            <span className="error-span">{formik.errors.email}</span>
                        : null}
                    </div>
                    <input name="email" {...formik.getFieldProps('email')}>
                    </input>
                </div>

                
                <div className="input-container">
                    <div className="input-label">
                        <span >phone</span>
                        {formik.touched.phone && formik.errors.phone ? 
                            <span className="error-span">{formik.errors.phone}</span>
                        : null}
                    </div>
                    <input name="phone" {...formik.getFieldProps('phone')}>
                    </input>
                </div> 

            </div>                  
        
            <div className="inputs-wrapper">
                <div className="input-container">
                    <div className="input-label">
                        <span >full name</span>
                        {formik.touched.fullname && formik.errors.fullname ? 
                            <span className="error-span">{formik.errors.fullname}</span>
                        : null}
                    </div>
                    <input name="fullname" {...formik.getFieldProps('fullname')} > 
                    </input>
                </div>

                <div className="input-container">
                    <div className="input-label">
                    <span >county</span>
                        {formik.touched.county && formik.errors.county ? 
                            <span className="error-span">{formik.errors.county}</span>
                        : null}
                    </div>
                    <input name="county" {...formik.getFieldProps('county')} >
                    </input>
                </div> 
            </div>                  

            <div className="inputs-wrapper">
                <div className="input-container">
                     <div className="input-label">
                    <span >password</span>
                        {formik.touched.password && formik.errors.password ? 
                            <span className="error-span">{formik.errors.password}</span>
                        : null}
                    </div>
                    <input name="password" {...formik.getFieldProps('password')}>
                    </input>
                </div>
                <div className="input-container">
                    <div className="input-label">
                    <span >company</span>
                        {formik.touched.company && formik.errors.company ? 
                            <span className="error-span">{formik.errors.company}</span>
                        : null}
                    </div>
                    <input name="company" {...formik.getFieldProps('company')}>
                    </input>
                </div> 
            </div>                  

            <div className="inputs-wrapper">
                <div className="input-container">
                    <div className="input-label">
                    <span >confirm password</span>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? 
                            <span className="error-span">{formik.errors.confirmPassword}</span>
                        : null}
                </div>
                <input name="confirmPassword" {...formik.getFieldProps('confirmPassword')}>
                </input>
            </div>  

                <div className="button-container">
                    <button type="submit" className="register-button">
                        Register
                    </button>
                </div>      
            </div>     
        </form>
    );
}

export default RegisterForm;