import { FETCH_DASHBOARD_DATA_SUCCESS } from './../constant/actionTypes';
import { DISPLAY_DASHBOARD_VIEW } from './../constant/actionTypes';
import { LOGGED_IN } from './../constant/actionTypes';

const initialState = {
    data: null,
    displayDashboard: false,
    loggedIn: false,
}

const dashBoardReducer = (state = initialState, action) => {
    const {data} = action;
    switch (action.type){
        case FETCH_DASHBOARD_DATA_SUCCESS:
            return {...state, data}
        case DISPLAY_DASHBOARD_VIEW:
            return {...state, displayDashboard: action.bool}
        case LOGGED_IN:
            return {...state, loggedIn: action.bool}
        default:
            return {...state, data}
    }
}

export default dashBoardReducer;