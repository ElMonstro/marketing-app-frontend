import React, { useState } from 'react';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import Loader from 'react-loader-spinner';

import { yupRegObj } from './validation';
import './register.scss';
import AuthService from './../../services/authService';


const RegisterForm = (props) => {
    const {changeAuthActiveState} = props;
    const [loaderVisibility, changeLoaderVisibility] = useState('hidden');

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
            onSubmit: async (values) => {
                changeLoaderVisibility('visible');
                const response = await AuthService.registerUser(values);
                changeLoaderVisibility('hidden');
                if (response.data) {
                    return Swal.fire({
                        title: 'Success!',
                        text: response.data.message,
                        icon: 'success',
                        confirmButtonText: 'close'
                    });
                }
                else if (response.non_field_errors) {
                    console.log('ERROR', response.non_field_errors);
                    return Swal.fire({
                        title: 'Error!',
                        text: response.non_field_errors[0],
                        icon: 'error',
                        confirmButtonText: 'close'
                    })
                }
                
            },
        });

    return(
        <form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>

        <div className="inputs-wrapper">
            <span className="form-title">REGISTER</span>
        </div>
        <div className="inputs-wrapper">
            <span className="form-tag">
                Already have an account? <span className="form-link" onClick={() => changeAuthActiveState()}>Login here</span>
            </span>
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
                    <input type="password" name="password" {...formik.getFieldProps('password')}>
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
                <input type="password" name="confirmPassword" {...formik.getFieldProps('confirmPassword')}>
                </input>
            </div>  

                <div className="button-container">
                    <button type="submit" className="register-button">
                        REGISTER
                    </button>
                </div>      
            </div>    
            <div style={{visibility: loaderVisibility}} className="inputs-wrapper">
            <Loader
                    type="Bars"
                    color="#1B7EC2"
                    height={50}
                    width={50}
                />
            </div>   
        </form>
    );
}

export default RegisterForm;