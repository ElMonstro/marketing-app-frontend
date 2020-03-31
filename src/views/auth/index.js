import React from 'react';

import RegisterForm from './registerForm';

import './index.scss';



const Auth = (props) => {

    return(
        <div>
            <div class="demo-layout-transparent mdl-layout mdl-js-layout">
                <header class="mdl-layout__header mdl-layout__header--transparent">
                    <div class="mdl-layout__header-row">
                    <span class="mdl-layout-title">JamboSMS</span>
                    </div>
                </header>
                <main class="mdl-layout__content">

                    <div className="auth-container">
                        <RegisterForm />
                    </div>
                </main>
                </div>
            </div>
    );
}

export default Auth;