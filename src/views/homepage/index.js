import React, { Component } from 'react';

import Footer from './../../components/footer';
import UssdProductPage from './../../components/productsPages/ussd';
import BulkSmsProductPage from './../../components/productsPages/bulksms.js';
import LandingPage from '../../components/landing-page';
import Auth from '../auth';
import logo from '../../assets/logo.svg';
import './index.scss';
import Hamberger from '../../components/hamberger';
import { HashLink as Link } from 'react-router-hash-link';

const navItemStyle = {
        color: '#1B7EC2',
        fontWeight: 600,
        cursor: 'pointer',
        borderRadius: '5px',
    }


export default class Homepage extends Component {
    state = {
        activeComponent: this.props.activeComponent,
        loginActive: this.props.loginActive
    }

    componentDidMount() {
        // eslint-disable-next-line no-undef
        componentHandler.upgradeDom()
    }
    
    renderActiveComponent = () => {
        let loginActive = true;
        (this.state.loginActive == null) ? loginActive = true: loginActive = this.state.loginActive;
        const { activeComponent } = this.state;
        switch (activeComponent) {
            case 'ussd-product-page':
                return <UssdProductPage />;
            case 'bulk-sms-product-page':
                return <BulkSmsProductPage />;
            case 'landing-page':
                return <LandingPage routeToRegister={this.routeToRegister}/>;
            case 'auth':
                return <Auth loginActive={loginActive}/>;
            default:
                return <LandingPage />;
        }
    }

    routeToRegister = () => {
        this.setState({
            activeComponent: 'auth',
            loginActive: false
        });
    }

    onhover = e => {
    }

    onMouseLeave = e => {
        e.target.style.background = '#ffffff'; 
        e.target.style.color = '#1B7EC2';
    }

    render() {
        return(
            <div className="mdl-layout__container home-page"> 
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <header className="mdl-layout__header mdl-layout__header--transparent">
                <div className="mdl-layout__header-row">
                {/* <!-- Title --> */}
                <span className="mdl-layout-title"><span style={{color: '#1B7EC2', fontWeight: 700, cursor: 'pointer'}}><img src={logo} onClick={() => this.setState({activeComponent: 'landing-page'})} className="logo" alt="Jambo SMS"/></span></span>
                {/* <!-- Add spacer, to align navigation to the right --> */}
                <div className="mdl-layout-spacer"></div>
                {/* <!-- Navigation --> */}
                    <nav className="mdl-navigation">
                    <span style={navItemStyle} className="nav-link mdl-navigation__link navigation-link" onMouseOver={this.onhover} onMouseLeave={this.onMouseLeave} onClick={() => this.setState({activeComponent: 'landing-page'})}>Home</span>
                    <Link smooth to="/#about-sect"><span style={navItemStyle} onMouseOver={this.onhover} onMouseLeave={this.onMouseLeave} className="nav-link mdl-navigation__link ">About</span></Link>
                        <span style={{display: 'none'}} className="nav-link mdl-navigation__link navigation-link"> 
                            <button id="demo-menu-lower-left" className="mdl-button mdl-js-button" style={{color: '#1B7EC2', fontWeight: 550, textTransform: 'capitalize'}} >Products</button>
                            <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                                for="demo-menu-lower-left">
                                <li><span style={{color: '#1B7EC2'}}  className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'ussd-product-page'})}>USSD</span></li>
                                <li><span  style={{color: '#1B7EC2'}} className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'bulk-sms-product-page'})}>Bulk SMS </span> </li>
                            </ul>
                        </span>
                        <Link smooth to="/#pricing-sect"><span style={navItemStyle} onMouseOver={this.onhover} onMouseLeave={this.onMouseLeave} className="nav-link mdl-navigation__link ">Pricing</span></Link>
                        <span style={navItemStyle} onMouseOver={this.onhover} onMouseLeave={this.onMouseLeave} className="nav-link mdl-navigation__link " onClick={() => this.setState({activeComponent: 'auth'})}>Login</span>
                    </nav>
                <div><span style={navItemStyle} className="nav-link mdl-navigation__link navigation-link"> 
                            <button id="menu"  ><Hamberger className="hamberger" /></button>
                            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                                for="menu">
                                <li><span style={navItemStyle} className="nav-link mdl-navigation__link navigation-link" onClick={() => this.setState({activeComponent: 'landing-page'})}>Home</span></li>
                                <li><span style={{color: '#1B7EC2', display: 'none'}}  className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'ussd-product-page'})}>Product: USSD</span></li>
                                <li><span  style={{color: '#1B7EC2', display: 'none'}} className="mdl-menu__item" onClick={() => this.setState({activeComponent: 'bulk-sms-product-page'})}>Product: Bulk SMS </span> </li>
                                <li><span style={navItemStyle} className="nav-link mdl-navigation__link ">Pricing</span></li>
                                <li><span style={navItemStyle} className="nav-link mdl-navigation__link ">About</span></li>
                                <li><span style={navItemStyle} className="nav-link mdl-navigation__link " onClick={() => this.setState({activeComponent: 'auth', loginActive: true})}>Login</span></li>
                            </ul>
                        </span></div>
                </div>
            </header>
                <main className="mdl-layout__content">
                    {this.renderActiveComponent()}
                    <Footer />
                </main>
            </div>
            </div>
        );
    
    }
}
