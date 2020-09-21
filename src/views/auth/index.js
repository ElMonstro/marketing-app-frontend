import React, {Component} from 'react';

import RegisterForm from './registerForm';
import LoginForm from './loginForm';
import './index.scss';
import loginPerson from '../../assets/login-person.svg';
import loginFlower from '../../assets/login-flower.svg';
import homePicture from '../../assets/home-picture.svg';

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
            <div className="auth-page" style={{backgroundImage:`url(${loginPerson})`, backgroundPosition: '100% 5%', backgroundRepeat: "no-repeat"}}>
                <img id="auth-flower" src={loginFlower} alt="login flower" /> 
                    {loginActive ? 
                        <div><LoginForm changeAuthActiveState={this.changeAuthActiveState} /></div> 
                            : 
                        <div><RegisterForm changeAuthActiveState={this.changeAuthActiveState}/></div>}
            </div>
            )
        };
}