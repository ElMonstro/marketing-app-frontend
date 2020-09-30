import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner';
import AuthService from '../../services/authServices';
import { yupLoginObj } from './../../components/forms/validation';
import './login.scss';


const LoginForm = (props) => {

    const {changeAuthActiveState} = props;
    const [loaderVisibility, changeLoaderVisibility] = useState('hidden');
    let history = useHistory();

    const formik = useFormik({
            initialValues: {
            email: '',
            password: '',
            },
            validationSchema: yupLoginObj,
            onSubmit: async (values) => {
                changeLoaderVisibility('visible');
                const response = await AuthService.loginUser(values);
                console.log('LOGIN RESPONSE', response.data);

                // store access tokens in local storeage
                
                window.localStorage.setItem('tokens',JSON.stringify(response.data));
                const res = await AuthService.fetchProfile();
                window.localStorage.setItem('profile',JSON.stringify(res.data));
                changeLoaderVisibility('hidden');

            
                if (response.status === 200){
                    return  Swal.fire({
                                    title: 'Success!',
                                    text: 'Login Successful',
                                    icon: 'success',
                                    confirmButtonText: 'close',
                                    onClose: () => history.push('/dashboard')
                                })
                } else if (response.detail){
                    return Swal.fire({
                        title: 'Error!',
                        text: response.detail,
                        icon: 'error',
                        confirmButtonText: 'close'
                    })
                } else {
                    return Swal.fire({
                        title: 'Error!',
                        text: "Something unexpected happened.Please try again",
                        icon: 'error',
                        confirmButtonText: 'close'
                    })
                }
            },
        });

    return(
        <form className="form" id="login-form" autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className="wrapper">
                <span className="form-title">LOGIN</span>
            </div>
                <div className="wrapper"> 
                    <span className="form-tag">
                        Don't have an account? <span className="form-link" onClick={() => changeAuthActiveState()}>Register here</span>
                    </span>
                </div>
                <div className="wrapper">
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
                </div>  
                <div className="wrapper">
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
                </div> 
                <div className="wrapper">
                    <div className="input-container">
                        <button type="submit" >LOGIN </button>
                    </div>
                </div>    
                <div style={{ position: 'relative', zIndex: '1', visibility: loaderVisibility }} className="wrapper">
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

    export default LoginForm;

    