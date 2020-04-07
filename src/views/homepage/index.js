import React, { Component } from 'react';

import UssdProductPage from './../../components/productsPages/ussd';
import BulkSmsProductPage from './../../components/productsPages/bulksms.js';
import LandingPage from './../../components/homepage';
import Auth from './../auth';

export default class Homepage extends Component {
    state = {
        activeComponent: null,
    }

    renderActiveComponent = () => {
        const { activeComponent } = this.state;
        switch (activeComponent) {
            case 'ussd-product-page':
                return <UssdProductPage />;
            case 'bulk-sms-product-page':
                return <BulkSmsProductPage />;
            case 'auth':
                return <Auth />;
            case 'landing-page':
                return <LandingPage />;
            default:
                return <LandingPage />;
        }
    }

    render() {
        return(
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header mdl-layout__header--transparent">
                <div class="mdl-layout__header-row">
                {/* <!-- Title --> */}
                <span class="mdl-layout-title"><span style={{color: '#1B7EC2', fontWeight: 700}}>Jambo SMS</span></span>
                {/* <!-- Add spacer, to align navigation to the right --> */}
                <div class="mdl-layout-spacer"></div>
                {/* <!-- Navigation --> */}
                    <nav class="mdl-navigation">
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link "> 
                            <button id="demo-menu-lower-left" class="mdl-button mdl-js-button" style={{color: '#1B7EC2', fontWeight: 500, textTransform: 'lowercase'}} >Products</button>
                            <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                                for="demo-menu-lower-left">
                                <li><span style={{color: '#1B7EC2'}}  className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'ussd-product-page'})}>USSD</span></li>
                                <li><span  style={{color: '#1B7EC2'}} className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'bulk-sms-product-page'})}>Bulk SMS </span> </li>
                            </ul>
                        </span>
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link">pricing</span>
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link">about us</span>
                        <span style={{color: '#B30059', fontWeight: 600}} className="nav-link mdl-navigation__link">reseller</span>
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link">API's</span>
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link" onClick={() => this.setState({activeComponent: 'auth'})}>login</span>
                    </nav>
                <div></div>
                </div>
            </header>
                <main class="mdl-layout__content">
                    {this.renderActiveComponent()}

                    {/* <Switch>
                        <Route path="/ussd">
                            <UssdProductPage />
                        </Route>
                        <Route path="/bulk-sms">
                            <BulkSmsProductPage />
                        </Route>
                        <Route path="/auth">
                            <Auth setPage={setPage}/>
                        </Route>
                    </Switch> */}

                    <footer class="mdl-mega-footer" style={{backgroundColor: 'rgb(20, 66, 97)'}}>
                            
                            <div style={{width: '100%', height: '200px', display: 'flex', display: 'flex', justifyContent: 'space-around'}}>

                            <div  class="mdl-mega-footer__drop-down-section">
                                <ul class="mdl-mega-footer__link-list">
                                    <li><h6 style={{color: '#ffffff'}}>FAQ's</h6></li>
                                    <li><a href="#">Questions</a></li>
                                    <li><a href="#">Answers</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                                </div>
                                <div  class="mdl-mega-footer__drop-down-section">
                                <ul class="mdl-mega-footer__link-list">
                                    <li><h6 style={{color: '#ffffff'}}>Social Links</h6></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Instagram</a></li>
                                </ul>
                                </div>

                                <div  class="mdl-mega-footer__drop-down-section">
                                <ul class="mdl-mega-footer__link-list">
                                    <li><h6 style={{color: '#ffffff'}}>Contacts</h6></li>
                                    <li><a href="#">Email</a></li>
                                    <li><a href="#">Phone 1</a></li>
                                    <li><a href="#">Phone 2</a></li>
                                </ul>
                                </div>
                            </div>

                            <div style={{textAlign: 'center'}} class="mdl-mega-footer__bottom-section">
                                <div class="mdl-logo">Title</div>
                                <ul class="mdl-mega-footer__link-list">
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Privacy & Terms</a></li>
                                </ul>
                            </div>
                    </footer>
                </main>
            </div>
        );
    }
}