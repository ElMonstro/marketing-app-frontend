/* eslint-disable require-yield */
import { takeLatest } from 'redux-saga/effects';
import groupsService from './../../services/dashboardServices';

import { 
    FETCH_DASHBOARD_DATA,
    FETCH_GROUPS,
} from './../constant/actionTypes';

export function* mountDashboardSagaWatcher() {
    yield takeLatest(FETCH_DASHBOARD_DATA, mountDashboardSaga)
}

export function* mountDashboardSaga() {
    // this saga will fetch data then run the success action creator to let the reducers know data has been fetched and to recieve it.
    try {
        //make an api call here
        // yield put(fetchDashboardDataSuccessAction(data));
    } catch (error) {
        
    }
}

export function* fetchGroupsWatcher() {
    yield takeLatest (FETCH_GROUPS, fetchGroupsSaga);
}
export function* fetchGroupsSaga() {
    try {
        const groups = groupsService.fetchGroups();
        console.log('GGGGGRRRRROUUPPPSS', groups);
    } catch (error) {
        
    }
}