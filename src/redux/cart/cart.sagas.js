import UserActionTypes from '../user/user.types';
import { all, call, takeLatest, put } from 'redux-saga/effects';
import { clearCart } from './cart.actions'


export function* clearCartSaga() {
    yield put(clearCart());
};

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSaga);
}

export function* cartSagas() {
    yield(all([
        call(onSignOutSuccess)
    ]));
};