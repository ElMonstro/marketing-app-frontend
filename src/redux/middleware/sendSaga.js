/* eslint-disable require-yield */
import { takeLatest, put, call } from 'redux-saga/effects';
import messageServices from '../../services/messageServices';
import { fetchSMSHistorySuccess, fetchEmailHistorySuccess } from '../action-creator';

import {
        FETCH_EMAIL_HISTORY,
        FETCH_SMS_HISTORY,
    } from '../constant/actionTypes';


export function* fetchSMSHistoryWatcher() {
    yield takeLatest(FETCH_SMS_HISTORY, fetchSMSSaga);
}

export function* fetchSMSSaga() {
    try {
        const { data } = yield call(messageServices.fetchMessages);
        yield put(fetchSMSHistorySuccess(data.results))
    } catch (error) {
        console.log(`sms fetch error sagas: ${error}`)
    }
}

export function* fetchEmailHistoryWatcher() {
    yield takeLatest(FETCH_EMAIL_HISTORY, fetchEmailSaga);
}

export function* fetchEmailSaga() {
    try {
        const { data } = yield call(messageServices.fetchMessages, 'email');
        yield put(fetchEmailHistorySuccess(data.results))
    } catch (error) {
        console.log(`email fetch error sagas: ${error}`)
    }
}
