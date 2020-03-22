import React, { Component } from 'react'

import './index.scss';

export default class Dashboard extends Component {
    state = {
        activeNavItem: null,
    }

    render(){

        const navItems = [
            {title: 'Dashboard', icon:"fa fa-bar-chart"}, 
            {title: 'Schedule', icon: "fa fa-clock-o"}, 
            {title: 'Groups', icon: "fa fa-users"}, 
            {title: 'Settings', icon: "fa fa-cog"}
        ];

        return(
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
                <div class="mdl-layout__drawer">
                    <nav class="mdl-navigation">
                        {
                        navItems.map((item) => (
                            <div className="nav-item">
                                <div className="icon">
                                    <i className={item.icon} aria-hidden="true"></i>
                                </div>
                                    {item.title}
                            </div>
                        ))
                    }
                    </nav>
                    
                </div>

                <main class="mdl-layout__content">
                    <div class="page-content"></div>
                </main>
            </div>
        );
    }
}
