/* eslint-disable require-yield */
import { takeLatest, takeEvery, put, call } from 'redux-saga/effects';
import groupsService from './../../services/groupsServices';
import { fetchGroupsSuccess, fetchGroupMembersSuccess } from './../action-creator';

import {
        FETCH_GROUPS,
        FETCH_GROUP_MEMBERS,
    } from './../constant/actionTypes';

export function* fetchGroupsWatcher() {
    yield takeLatest (FETCH_GROUPS, fetchGroupsSaga);
}

export function* fetchGroupsSaga() {
    try {
        const {data} = yield call(groupsService.fetchGroups);
        yield put(fetchGroupsSuccess(data.results))
    } catch (error) {
        
    }
}

export function* fetchGroupMembersSagaWatcher() {
    yield takeEvery(FETCH_GROUP_MEMBERS, fetchGroupMembersSaga)
}

export function* fetchGroupMembersSaga(action) {
    try {
        const groupMembers = yield call(groupsService.fetchAllGroupMembers, action.params);
        console.log('ALL MEMBERS FROM SAGA', groupMembers)
        yield put(fetchGroupMembersSuccess(groupMembers))
        
    } catch (error) {
        console.log('members saga', error)
    }
}