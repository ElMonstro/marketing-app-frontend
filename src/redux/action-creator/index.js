import { 
    FETCH_DASHBOARD_DATA,
    FETCH_DASHBOARD_DATA_SUCCESS,
    DISPLAY_DASHBOARD_VIEW,
    LOGGED_IN,
    FETCH_GROUPS,
    FETCH_GROUPS_SUCCESS,
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
export const fetchGroupsSuccess = (groups) => ({
    type: FETCH_GROUPS_SUCCESS,
    groups,
})

