import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './redux/store/store';
import Homepage from './views/homepage';
import Dashboard from './views/dashboard';

const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={Homepage}/>
                    <Route
                        path="/dashboard"
                        exact
                        component={Dashboard}/>
                    
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;