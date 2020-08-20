import { 
    FETCH_DASHBOARD_DATA,
    FETCH_DASHBOARD_DATA_SUCCESS,
    DISPLAY_DASHBOARD_VIEW,
    LOGGED_IN,
    FETCH_SMS_GROUPS,
    FETCH_EMAIL_GROUPS,
    FETCH_EMAIL_GROUPS_SUCCESS,
    FETCH_SMS_GROUPS_SUCCESS,
    POST_NEW_GROUP_SUCCESS,
    FETCH_GROUP_MEMBERS,
    FETCH_GROUP_MEMBERS_SUCCESS,
    FETCH_SMS_HISTORY,
    FETCH_EMAIL_HISTORY,
    FETCH_SMS_HISTORY_SUCCESS,
    FETCH_EMAIL_HISTORY_SUCCESS,
    CHANGE_CURRENT_MESSAGES,
    UPDATE_GROUPS_AFTER_DELETION,
    UPDATE_MEMBERS_AFTER_DELETION

    
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

export const fetchSMSGroups = () => ({
    type: FETCH_SMS_GROUPS,
});

export const fetchEmailGroups = () => ({
    type: FETCH_EMAIL_GROUPS,
});

export const fetchSMSGroupsSuccess = (smsGroups) => {
    return {
    type: FETCH_SMS_GROUPS_SUCCESS,
    smsGroups,
}};

export const fetchEmailGroupsSuccess = (emailGroups) => {
    return {
    type: FETCH_EMAIL_GROUPS_SUCCESS,
    emailGroups,
}};

export const postNewGroupSuccess = () => ({
    type: POST_NEW_GROUP_SUCCESS,
});

export const fetchGroupMembers = (group, mode) => {
    const params = {group, mode};
    console.log(group, 'members')
    return {
        type: FETCH_GROUP_MEMBERS,
        params,
    }
};

export const fetchGroupMembersSuccess = (activeGroupMembers) => ({
    type: FETCH_GROUP_MEMBERS_SUCCESS,
    activeGroupMembers
});

export const fetchSMSHistory = () => ({
    type: FETCH_SMS_HISTORY,
});

export const fetchEmailHistory = () => ({
    type: FETCH_EMAIL_HISTORY,

});


export const fetchSMSHistorySuccess = (sms) => ({
    type: FETCH_SMS_HISTORY_SUCCESS,
    sms,
});

export const fetchEmailHistorySuccess = (emails) => ({
    type: FETCH_EMAIL_HISTORY_SUCCESS,
    emails,
});

export const changeCurrentMessages = currentMessages => ({
    type: CHANGE_CURRENT_MESSAGES,
    currentMessages,
});
