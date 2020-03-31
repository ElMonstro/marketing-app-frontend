import React from 'react';
import { useFormik } from 'formik';

import { yupLoginObj } from './validation';
import './login.scss';


const LoginForm = (props) => {

    const {changeAuthActiveState} = props;

    const formik = useFormik({
            initialValues: {
            email: '',
            password: '',
            },
            validationSchema: yupLoginObj,
            onSubmit: values => {
                // alert(JSON.stringify(values, null, 2));
            },
        });

    return(
        <form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>
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
                        <button type="submit" >LOGIN</button>
                    </div>
                </div>     
            </form>
    );
    }

    export default LoginForm;