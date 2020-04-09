import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Homepage from './views/homepage';
import Dashboard from './views/dashboard';
import Auth from './views/auth';

const App = () => {
    return(
    <BrowserRouter>
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
    </BrowserRouter>
    );
}

export default App;