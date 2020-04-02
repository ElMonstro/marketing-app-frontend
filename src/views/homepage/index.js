import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import UssdProductPage from './../../components/productsPages/ussd';
import BulkSmsProductPage from './../../components/productsPages/bulksms.js'

export default class Homepage extends Component {

    render() {
        
        return(
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header mdl-layout__header--transparent">
                <div class="mdl-layout__header-row">
                {/* <!-- Title --> */}
                <span class="mdl-layout-title"><span style={{color: 'black', fontWeight: 700}}>Jambo SMS</span></span>
                {/* <!-- Add spacer, to align navigation to the right --> */}
                <div class="mdl-layout-spacer"></div>
                {/* <!-- Navigation --> */}
                    <nav class="mdl-navigation">
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link "> 
                            <button id="demo-menu-lower-left" class="mdl-button mdl-js-button" style={{color: '#1B7EC2', fontWeight: 500, textTransform: 'lowercase'}} >Products</button>
                            <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                                for="demo-menu-lower-left">
                                <li><Link to="/ussd"><span style={{color: '#1B7EC2',}} className="mdl-menu__item">USSD</span></Link></li>
                                <li><Link to="/bulk-sms"><span style={{color: '#1B7EC2'}} className="mdl-menu__item">Bulk SMS</span></Link></li>
                            </ul>
                        </span>
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link">pricing</span>
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link">about us</span>
                        <span style={{color: '#B30059', fontWeight: 600}} className="nav-link mdl-navigation__link">reseller</span>
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link">API's</span>
                        <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link">login</span>
                    </nav>
                <div></div>
                </div>
            </header>
                <main class="mdl-layout__content">
                    <Switch>
                        <Route path="/ussd">
                            <UssdProductPage />
                        </Route>
                        <Route path="/bulk-sms">
                            <BulkSmsProductPage />
                        </Route>
                    </Switch>

                    <footer class="mdl-mega-footer" style={{backgroundColor: 'rgb(20, 66, 97)'}}>
                            
                            <div style={{width: '100%', height: '200px', display: 'flex', display: 'flex', justifyContent: 'space-around'}}>
                            <div style={{textAlign: 'center'}} class="mdl-mega-footer__drop-down-section">
                                <ul class="mdl-mega-footer__link-list">
                                    <li><h6 style={{color: '#ffffff'}}>Questions</h6></li>
                                    <li><a href="#">Questions</a></li>
                                    <li><a href="#">Answers</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                                </div>
                                <div style={{textAlign: 'center'}} class="mdl-mega-footer__drop-down-section">
                                <ul class="mdl-mega-footer__link-list">
                                    <li><h6 style={{color: '#ffffff'}}>Questions</h6></li>
                                    <li><a href="#">Questions</a></li>
                                    <li><a href="#">Answers</a></li>
                                    <li><a href="#">Contact us</a></li>
                                </ul>
                                </div>

                                <div style={{textAlign: 'center'}} class="mdl-mega-footer__drop-down-section">
                                <ul class="mdl-mega-footer__link-list">
                                    <li><h6 style={{color: '#ffffff'}}>Questions</h6></li>
                                    <li><a href="#">Questions</a></li>
                                    <li><a href="#">Answers</a></li>
                                    <li><a href="#">Contact us</a></li>
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