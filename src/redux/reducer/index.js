import { combineReducers } from 'redux';
import dashboardStoreState from './dashboardReducer';
import sendStoreState from './sendReducer';
const rootReducer = combineReducers({
    dashboardStoreState,
    sendStoreState,
});

export default rootReducer;
