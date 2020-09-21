/* eslint-disable require-yield */
import { takeLatest, takeEvery, put, call } from 'redux-saga/effects';
import groupsService from './../../services/groupsServices';
import { fetchSMSGroupsSuccess, fetchEmailGroupsSuccess, fetchGroupMembersSuccess, fetchProfileSuccess } from './../action-creator';

import {
        FETCH_SMS_GROUPS,
        FETCH_EMAIL_GROUPS,
        FETCH_GROUP_MEMBERS,
        FETCH_PROFILE
    } from './../constant/actionTypes';
import AuthService from '../../services/authServices';

export function* fetchSMSGroupsWatcher() {
    yield takeLatest (FETCH_SMS_GROUPS, fetchSMSGroupsSaga);
}

export function* fetchSMSGroupsSaga() {
    try {
        const {data} = yield call(groupsService.fetchGroups);
        yield put(fetchSMSGroupsSuccess(data.results));
    } catch (error) {
        
    }
}


export function* fetchEmailGroupsWatcher() {
    yield takeLatest (FETCH_EMAIL_GROUPS, fetchEmailGroupsSaga);
}

export function* fetchEmailGroupsSaga() {
    try {
        const {data} = yield call(groupsService.fetchGroups, 'email');
        yield put(fetchEmailGroupsSuccess(data.results));
    } catch (error) {
        
    }
}

export function* fetchGroupMembersSagaWatcher() {
    yield takeLatest(FETCH_GROUP_MEMBERS, fetchGroupMembersSaga)
}

export function* fetchGroupMembersSaga(action) {
    try {
        const groupMembers = yield call(groupsService.fetchAllGroupMembers, action.params);
        yield put(fetchGroupMembersSuccess(groupMembers));
        
    } catch (error) {
        console.log('members saga', error);
    }
}

export function* fetchProfileWatcher() {
    yield takeLatest(FETCH_PROFILE, fetchGroupMembersSaga)
}

export function* fetchProfileSaga() {
    try {
        const profile = yield call(AuthService.fetchProfile);
        yield put(fetchProfileSuccess(profile));
        
    } catch (error) {
        console.log('profile saga', error);
    }
}
