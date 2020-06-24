import { all } from 'redux-saga/effects';
import {
        fetchGroupsWatcher,
        fetchGroupsSaga,
        fetchGroupMembersSagaWatcher,
        fetchGroupMembersSaga,
    } from './../middleware/dashboardSaga';

import {
        fetchSMSHistoryWatcher,
        fetchEmailSaga,
        fetchEmailHistoryWatcher,
        fetchSMSSaga
} from './../middleware/sendSaga';

function* rootSaga(){
    yield all([
        fetchGroupsWatcher(),
        fetchGroupsSaga(),
        fetchGroupMembersSagaWatcher(),
        fetchGroupMembersSaga(),
        fetchSMSHistoryWatcher(),
        fetchSMSSaga(),
        fetchEmailHistoryWatcher(),
        fetchEmailSaga()
    ]);
}

export default rootSaga;
