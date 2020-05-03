import {
    FETCH_GROUPS_SUCCESS,
    FETCH_GROUP_MEMBERS_SUCCESS,
} from './../constant/actionTypes';

const initialState = {
    groups: null,
    activeGroupMembers: null,
}

const dashBoardStoreState = ( state=initialState, action ) => {
    switch (action.type){
        case FETCH_GROUPS_SUCCESS:
            const {groups} = action;
            return {...state, groups}

        case FETCH_GROUP_MEMBERS_SUCCESS:
            const {activeGroupMembers} = action;
            return {...state, activeGroupMembers}
            
        default:
            return state;
    }
}

export default dashBoardStoreState;