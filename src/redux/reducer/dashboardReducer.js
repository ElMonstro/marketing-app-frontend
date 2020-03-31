import { FETCH_DASHBOARD_DATA_SUCCESS } from './../constant/actionTypes';

const initialState = {
    data: null,
}

const dashBoardReducer = (state = initialState, action) => {
    const {data} = action;
    switch (action.type){
        case FETCH_DASHBOARD_DATA_SUCCESS:
            return {...state, data}
        default:
            return {...state, data}
    }
}

export default dashBoardReducer;