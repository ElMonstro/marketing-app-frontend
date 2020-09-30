import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AOS from 'aos';

import Homepage from './views/homepage';
import Dashboard from './views/dashboard';
import './App.css';
import 'aos/dist/aos.css'; 

const App = () => {
    AOS.init();
    
    return(
    <BrowserRouter>
        <div>
        <Switch>
            <Route exact path="/">
                    <Homepage />
            </Route>
            <Route path="/dashboard">
                <div>
                    <Dashboard defaultSelectedKey='1' />
                </div>
            </Route>
            <Route path="/send">
                <div>
                    <Dashboard defaultSelectedKey='1'/>
                </div>
            </Route>
            <Route path="/groups">
                <div>
                    <Dashboard defaultSelectedKey='2'/>
                </div>
            </Route>
            <Route path="/recharge">
                <div>
                    <Dashboard defaultSelectedKey='3'/>
                </div>
            </Route>
        </Switch>
        </div>
    </BrowserRouter>
    );
}

export default App;