import { all } from 'redux-saga/effects';
import {watchAddUser} from "./user";

export default function* rootSaga(){
    yield all([
        watchAddUser()
    ])
}