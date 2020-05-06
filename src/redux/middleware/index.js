import { all } from 'redux-saga/effects';
import {
        fetchGroupsWatcher,
        fetchGroupsSaga,
        fetchGroupMembersSagaWatcher,
        fetchGroupMembersSaga,
    } from './../middleware/dashboardSaga';

function* rootSaga(){
    yield all([
        fetchGroupsWatcher(),
        fetchGroupsSaga(),
        fetchGroupMembersSagaWatcher(),
        fetchGroupMembersSaga(),
    ]);
}

export default rootSaga;