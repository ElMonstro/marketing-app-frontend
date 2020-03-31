import { FETCH_DASHBOARD_DATA } from './../constant/actionTypes';
import { FETCH_DASHBOARD_DATA_SUCCESS } from './../constant/actionTypes';

export const fetchDashboardDataAction = () => {
    console.log('hereee');
    return {
    type: FETCH_DASHBOARD_DATA
}
};

export const fetchDashboardDataSuccessAction = (data) => ({
    type: FETCH_DASHBOARD_DATA_SUCCESS,
    data
});