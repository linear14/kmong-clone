import { all } from 'redux-saga/effects';
import { categorySaga } from './category/saga';
import { combineReducers } from 'redux';
import { categoryList } from './category/reducer';

export function* rootSaga() {
  yield all([categorySaga()]);
}

export const rootReducer = combineReducers({
  categoryList
});

export type RootState = ReturnType<typeof rootReducer>;
