import React, {Component} from 'react';

import RegisterForm from './registerForm';
import LoginForm from './loginForm';
import './index.scss';

export default class Auth extends Component {

    state = {
        loginActive: true,
    }

    changeAuthActiveState = () => {
        const {loginActive} = this.state;
        this.setState({loginActive: !loginActive});
    }

    render () {
        const {loginActive} = this.state;
        return (
            <div className="auth-page">
                <div className="auth-container">
                    {loginActive ? 
                        <LoginForm changeAuthActiveState={this.changeAuthActiveState} /> 
                            : 
                        <RegisterForm changeAuthActiveState={this.changeAuthActiveState} />}
                </div>
            </div>
            )
        };
}