/* eslint-disable require-yield */
import { takeLatest, put, call } from 'redux-saga/effects';
import groupsService from './../../services/groupsServices';
import { fetchGroupsSuccess } from './../action-creator';

import {
        FETCH_GROUPS,
        FETCH_GROUP_MEMBERS,
    } from './../constant/actionTypes';

export function* fetchGroupsWatcher() {
    yield takeLatest (FETCH_GROUPS, fetchGroupsSaga);
}

export function* fetchGroupsSaga() {
    try {
        console.log('fetchGroupsSaga')
        const {data} = yield call(groupsService.fetchGroups);
        console.log('fetchGroupsSagadata', data)
        yield put(fetchGroupsSuccess(data.results))
    } catch (error) {
        
    }
}

export function* fetchGroupMembersSagaWatcher(action) {
    // console.log('GROUP MEMBER WATCHER RUNS', action.groups)
    // yield takeLatest(FETCH_GROUP_MEMBERS, fetchGroupMembersSaga)
}

export function* fetchGroupMembersSaga(action) {
    try {
        // console.log('SAGAACTIONDATA', action.groups)
        // yield call(groupsService.fetchGroupMembers)
        
    } catch (error) {
        
    }
}