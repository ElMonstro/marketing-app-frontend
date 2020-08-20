import { all } from 'redux-saga/effects';
import {
        fetchSMSGroupsWatcher,
        fetchEmailGroupsWatcher,
        fetchEmailGroupsSaga,
        fetchSMSGroupsSaga,
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
        fetchSMSGroupsWatcher(),
        fetchSMSGroupsSaga(),
        fetchEmailGroupsWatcher(),
        fetchEmailGroupsSaga(),
        fetchGroupMembersSagaWatcher(),
        fetchGroupMembersSaga(),
        fetchSMSHistoryWatcher(),
        fetchSMSSaga(),
        fetchEmailHistoryWatcher(),
        fetchEmailSaga()
    ]);
}

export default rootSaga;
