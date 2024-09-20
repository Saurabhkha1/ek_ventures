// sagas.ts (or sagas.js)
import { all, fork } from 'redux-saga/effects';
import { watchVideoRequest } from './videoSaga';


export default function* rootSaga() {
  yield all([
    watchVideoRequest(),

  ]);
}
