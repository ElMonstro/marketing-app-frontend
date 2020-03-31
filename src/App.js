import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store/store';
import Auth from './views/auth';

const app = () => {
    return(
        <Provider store={store}>
            <Auth/>
        </Provider>
    );
}

export default app;