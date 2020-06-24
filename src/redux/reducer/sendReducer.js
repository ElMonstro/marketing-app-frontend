import {
    FETCH_EMAIL_HISTORY_SUCCESS,
    FETCH_SMS_HISTORY_SUCCESS,
    CHANGE_CURRENT_MESSAGES,
} from './../constant/actionTypes';

const initialState = {
    emails: [],
    sms: [],
    currentMessages: 'sms'
};

const sendStoreState = ( state=initialState, action ) => {
    switch (action.type){
        case FETCH_SMS_HISTORY_SUCCESS:
            const {sms} = action;
            return {...state, sms}

        case FETCH_EMAIL_HISTORY_SUCCESS:
            const {emails} = action;
            return {...state, emails}

        case CHANGE_CURRENT_MESSAGES:
            const {currentMessages} = action
            return {...state, currentMessages}
            
        default:
            return state;
    }
};

export default sendStoreState;
