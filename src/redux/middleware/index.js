import { all } from 'redux-saga/effects';
import {
    mountDashboardSagaWatcher,
    mountDashboardSaga,
    } from './../middleware/dashboardSaga';

function* rootSaga(){
    yield all([
        mountDashboardSagaWatcher(),
        mountDashboardSaga(),
    ]);
}

export default rootSaga;