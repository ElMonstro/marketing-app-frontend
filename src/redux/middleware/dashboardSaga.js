/* eslint-disable require-yield */
import { takeLatest } from 'redux-saga/effects';

import { FETCH_DASHBOARD_DATA } from './../constant/actionTypes';

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