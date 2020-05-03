import React, { Component } from 'react';
import {connect} from 'react-redux';

import DashboardSection from '../../components/dashboardSection';
import Settings from './../../components/settings';
import Groups from './../../components/groups';
import './index.scss';

class Dashboard extends Component {
    state = {
        activeNavItem: 'Dashboard',
    }

    componentDidMount (){
        // eslint-disable-next-line no-undef
        componentHandler.upgradeDom()
    }

    handleClickedNavItem = (e) => {
        const itemClickedId = e.target.id;
        if (itemClickedId){
            this.setState({activeNavItem: itemClickedId});
        }
    }

    returnDynamicSection = (activeNavItem) => {
        switch (activeNavItem) {
            case 'Dashboard':
                return <DashboardSection />
            case 'Groups':
                return <Groups />
            case 'Settings':
                return <Settings />
            default:
                return <DashboardSection />
        }
    }

    render(){
        const { activeNavItem}  = this.state;
        const navItems = [
            { title: 'Dashboard', icon:"fa fa-bar-chart" }, 
            { title: 'Send', icon: "fa fa-paper-plane" }, 
            { title: 'Recharge', icon: "fa fa-money" }, 
            { title: 'Schedule', icon: "fa fa-clock-o" }, 
            { title: 'Groups', icon: "fa fa-users" }, 
            { title: 'Settings', icon: "fa fa-cog" }
        ];

        return(
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <header className="mdl-layout__header mdl-layout__header--transparent">
                    <div className="mdl-layout__header-row">
                    {/* <!-- Title --> */}
                    <span className="mdl-layout-title">Jambo SMS</span>
                    {/* <!-- Add spacer, to align navigation to the right --> */}
                    <div className="mdl-layout-spacer"></div>
                    {/* <!-- Navigation --> */}
                    <div></div>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <nav className="mdl-navigation">
                        {
                        navItems.map((item) => (
                            activeNavItem === item.title ?
                            <div className="nav-item-active" id={item.title} onClick={this.handleClickedNavItem}>
                            <div className="icon">
                                    <i className={item.icon} aria-hidden="true"></i>
                                </div>
                                    {item.title}
                            </div>
                                : 
                            <div className="nav-item" id={item.title} onClick={this.handleClickedNavItem}>
                                <div className="icon">
                                    <i className={item.icon} aria-hidden="true"></i>
                                </div>
                                    {item.title}
                            </div>
                        ))
                    }
                    </nav>
                    
                </div>

                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.returnDynamicSection(this.state.activeNavItem)}
                    </div>
                </main>
            </div>
        );
    }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard)