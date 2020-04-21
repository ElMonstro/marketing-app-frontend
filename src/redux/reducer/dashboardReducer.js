import {
    FETCH_GROUPS_SUCCESS,
} from './../constant/actionTypes';

const initialState = {
    groups: null,
}

const dashBoardStoreState = (state = initialState, action) => {
    switch (action.type){
        case FETCH_GROUPS_SUCCESS:
            const {groups} = action;
            return {...state, groups}
        default:
            return null
    }
}

export default dashBoardStoreState;