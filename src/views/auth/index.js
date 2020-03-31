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
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header mdl-layout__header--transparent">
                <div class="mdl-layout__header-row">
                {/* <!-- Title --> */}
                <span class="mdl-layout-title">Jambo SMS</span>
                {/* <!-- Add spacer, to align navigation to the right --> */}
                <div class="mdl-layout-spacer"></div>
                {/* <!-- Navigation --> */}
                <div></div>
                </div>
            </header>
                    <main class="mdl-layout__content">

                        <div className="auth-container">
                            {loginActive ? 
                                <LoginForm changeAuthActiveState={this.changeAuthActiveState} /> 
                                    : 
                                <RegisterForm changeAuthActiveState={this.changeAuthActiveState} />}
                        </div>
                    </main>
                    </div>
            )
        };
}