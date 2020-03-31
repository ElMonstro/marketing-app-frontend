import React from 'react';
import Dashboard from './views/dashboard';
import { Provider } from 'react-redux';

import store from './redux/store/store';
import Auth from './views/auth';

const app = () => {
    return(
        <Provider store={store}>
            {/* <Dashboard/> */}
            <Auth/>
        </Provider>
    );
}

export default app;