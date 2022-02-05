import { all } from 'redux-saga/effects';
import { categorySaga } from './category/saga';
import { serviceSaga } from './service/saga';
import { combineReducers } from 'redux';
import { categoryList } from './category/reducer';
import { serviceCardList, totalServiceCount } from './service/reducer';

export function* rootSaga() {
  yield all([categorySaga(), serviceSaga()]);
}

export const rootReducer = combineReducers({
  categoryList,
  serviceCardList,
  totalServiceCount
});

export type RootState = ReturnType<typeof rootReducer>;
