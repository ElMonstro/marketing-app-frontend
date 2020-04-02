import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store/store';
import Homepage from './views/homepage';
import Auth from './views/auth';

const app = () => {
    return(
        <Provider store={store}>
            {/* <Auth/> */}
            <Homepage />
        </Provider>
    );
}

export default app;