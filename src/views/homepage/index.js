import React, { Component } from 'react';

import Footer from './../../components/footer';
import UssdProductPage from './../../components/productsPages/ussd';
import BulkSmsProductPage from './../../components/productsPages/bulksms.js';
import LandingPage from '../../components/landing-page';
import Auth from '../auth';
import logo from '../../assets/logo.svg';
import './index.scss';
import hHmberger from '../../components/hamberger';
import Hamberger from '../../components/hamberger';

const navItemStyle = {
        color: '#1B7EC2', 
        fontWeight: 600,
        cursor: 'pointer'
    }

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
            <div class="mdl-layout__container home-page"> 
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header class="mdl-layout__header mdl-layout__header--transparent">
                <div class="mdl-layout__header-row">
                {/* <!-- Title --> */}
                <span class="mdl-layout-title"><span style={{color: '#1B7EC2', fontWeight: 700}}><img src={logo} className="logo" alt="Jambo SMS"/></span></span>
                {/* <!-- Add spacer, to align navigation to the right --> */}
                <div class="mdl-layout-spacer"></div>
                {/* <!-- Navigation --> */}
                    <nav class="mdl-navigation">
                    <span style={navItemStyle} className="nav-link mdl-navigation__link navigation-link" onClick={() => this.setState({activeComponent: 'landing-page'})}>Home</span>
                        <span style={navItemStyle} className="nav-link mdl-navigation__link navigation-link"> 
                            <button id="demo-menu-lower-left" class="mdl-button mdl-js-button" style={{color: '#1B7EC2', fontWeight: 550, textTransform: 'capitalize'}} >Products</button>
                            <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                                for="demo-menu-lower-left">
                                <li><span style={{color: '#1B7EC2'}}  className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'ussd-product-page'})}>USSD</span></li>
                                <li><span  style={{color: '#1B7EC2'}} className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'bulk-sms-product-page'})}>Bulk SMS </span> </li>
                            </ul>
                        </span>
                        <span style={navItemStyle} className="nav-link mdl-navigation__link ">Pricing</span>
                        <span style={navItemStyle} className="nav-link mdl-navigation__link ">About</span>
                        <span style={navItemStyle} className="nav-link mdl-navigation__link " onClick={() => this.setState({activeComponent: 'auth'})}>Login</span>
                    </nav>
                <div><span style={navItemStyle} className="nav-link mdl-navigation__link navigation-link"> 
                            <button id="menu"  ><Hamberger className="hamberger" /></button>
                            <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                for="menu">
                                <li><span style={navItemStyle} className="nav-link mdl-navigation__link navigation-link" onClick={() => this.setState({activeComponent: 'landing-page'})}>Home</span></li>
                                <li><span style={{color: '#1B7EC2'}}  className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'ussd-product-page'})}>Product: USSD</span></li>
                                <li><span  style={{color: '#1B7EC2'}} className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'bulk-sms-product-page'})}>Product: Bulk SMS </span> </li>
                                <li><span style={navItemStyle} className="nav-link mdl-navigation__link ">Pricing</span></li>
                                <li><span style={navItemStyle} className="nav-link mdl-navigation__link ">About</span></li>
                                <li><span style={navItemStyle} className="nav-link mdl-navigation__link " onClick={() => this.setState({activeComponent: 'auth'})}>Login</span></li>
                            </ul>
                        </span></div>
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