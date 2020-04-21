import { combineReducers } from 'redux';
import dashboardStoreState from './dashboardReducer';

const rootReducer = combineReducers({
    dashboardStoreState,
});

export default rootReducer;