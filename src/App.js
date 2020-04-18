import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import AOS from 'aos';

import Homepage from './views/homepage';
import Dashboard from './views/dashboard';
import Auth from './views/auth';
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
            <Route path="/auth">
                <Auth />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
        </div>
    </BrowserRouter>
    );
}

export default App;