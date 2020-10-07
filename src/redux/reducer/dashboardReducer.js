import {
    FETCH_SMS_GROUPS_SUCCESS,
    FETCH_EMAIL_GROUPS_SUCCESS,
    FETCH_GROUP_MEMBERS_SUCCESS,
    SET_SESSION_STATE
    
} from './../constant/actionTypes';

const initialState = {
    emailGroups: null,
    smsGroups: null,
    activeGroupMembers: null,
    isSessionExpired: false
}

const dashBoardStoreState = ( state=initialState, action ) => {
    switch (action.type){
        case FETCH_EMAIL_GROUPS_SUCCESS:
            const {emailGroups} = action;
            return {...state, emailGroups}

        case FETCH_SMS_GROUPS_SUCCESS:
            const {smsGroups} = action;
            return {...state, smsGroups};

        case FETCH_GROUP_MEMBERS_SUCCESS:
            const {activeGroupMembers} = action;
            return {...state, activeGroupMembers}
        case SET_SESSION_STATE:
            const { isSessionExpired } = action;
            return {...state, isSessionExpired}


        default:
            return state;
    }
}

export default dashBoardStoreState;
