import { all } from 'redux-saga/effects';
import { categorySaga } from './category';

export function* rootSaga() {
  yield all([categorySaga()]);
}
