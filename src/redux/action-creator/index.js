import { 
    FETCH_DASHBOARD_DATA,
    FETCH_DASHBOARD_DATA_SUCCESS,
    DISPLAY_DASHBOARD_VIEW,
    LOGGED_IN,
    FETCH_GROUPS,
    FETCH_GROUPS_SUCCESS,
    POST_NEW_GROUP_SUCCESS,
    FETCH_GROUP_MEMBERS,
    FETCH_GROUP_MEMBERS_SUCCESS,
    
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

export const fetchGroupsSuccess = (groups) => {
    console.log('fetch group success', groups)
    return {
    type: FETCH_GROUPS_SUCCESS,
    groups,
}}

export const postNewGroupSuccess = () => ({
    type: POST_NEW_GROUP_SUCCESS,
})

export const fetchGroupMembers = (groups, activeGroupIndex) => ({
    type: FETCH_GROUP_MEMBERS,
    groups,
    activeGroupIndex
})

export const fetchGroupMembersSuccess = () => ({
    type: FETCH_GROUP_MEMBERS_SUCCESS
})

