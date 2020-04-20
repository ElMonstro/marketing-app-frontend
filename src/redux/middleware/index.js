import { all } from 'redux-saga/effects';
import {
    mountDashboardSagaWatcher,
    mountDashboardSaga,
    fetchGroupsWatcher,
    fetchGroupsSaga,
    } from './../middleware/dashboardSaga';

function* rootSaga(){
    yield all([
        mountDashboardSagaWatcher(),
        mountDashboardSaga(),
        fetchGroupsWatcher(),
        fetchGroupsSaga(),
    ]);
}

export default rootSaga;