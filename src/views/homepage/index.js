import React, { Component } from 'react';

import Footer from './../../components/footer';
import UssdProductPage from './../../components/productsPages/ussd';
import BulkSmsProductPage from './../../components/productsPages/bulksms.js';
import LandingPage from '../../components/landing-page';
import Auth from '../auth';

export default class Homepage extends Component {
    state = {
        activeComponent: null,
    }

    componentDidMount() {
        // eslint-disable-next-line no-undef
        componentHandler.upgradeDom()
    }
    
    renderActiveComponent = () => {
        const { activeComponent } = this.state;
        switch (activeComponent) {
            case 'ussd-product-page':
                return <UssdProductPage />;
            case 'bulk-sms-product-page':
                return <BulkSmsProductPage />;
            case 'landing-page':
                return <LandingPage />;
            case 'auth':
                return <Auth />;
            default:
                return <LandingPage />;
        }
    }

    render() {
        return(
            <div class="mdl-layout__container"> 
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header mdl-layout__header--transparent">
                <div class="mdl-layout__header-row">
                {/* <!-- Title --> */}
                <span class="mdl-layout-title"><span style={{color: '#1B7EC2', fontWeight: 700}}>Jambo SMS</span></span>
                {/* <!-- Add spacer, to align navigation to the right --> */}
                <div class="mdl-layout-spacer"></div>
                {/* <!-- Navigation --> */}
                    <nav class="mdl-navigation">
                    <span style={{color: '#1B7EC2', fontWeight: 600}} className="nav-link mdl-navigation__link" onClick={() => this.setState({activeComponent: 'landing-page'})}>home</span>
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
                    <Footer />
                </main>
            </div>
            </div>
        );
    }
}