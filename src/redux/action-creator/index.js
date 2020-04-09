import { FETCH_DASHBOARD_DATA } from './../constant/actionTypes';
import { FETCH_DASHBOARD_DATA_SUCCESS } from './../constant/actionTypes';
import { DISPLAY_DASHBOARD_VIEW } from './../constant/actionTypes';
import { LOGGED_IN } from './../constant/actionTypes';


export const fetchDashboardDataAction = () => {
    return {
        type: FETCH_DASHBOARD_DATA
    }
};

export const fetchDashboardDataSuccessAction = (data) => ({
    type: FETCH_DASHBOARD_DATA_SUCCESS,
    data
});

export const displayDashboardViewAction = (bool) => ({
    type: DISPLAY_DASHBOARD_VIEW,
    bool
});

export const loggedIn = (bool) => ({
    type: LOGGED_IN,
    bool
});