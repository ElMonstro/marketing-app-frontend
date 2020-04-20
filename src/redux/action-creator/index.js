import { 
    FETCH_DASHBOARD_DATA,
    FETCH_DASHBOARD_DATA_SUCCESS,
    DISPLAY_DASHBOARD_VIEW,
    LOGGED_IN,
    FETCH_GROUPS,
} from './../constant/actionTypes';

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

export const fetchGroups = () => ({
    type: FETCH_GROUPS,
})

