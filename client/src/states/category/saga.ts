import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllCategoriesFailed, getAllCategoriesSuccess } from './action';
import api from 'src/apis';
import { GET_ALL_CATEGORIES } from './constant';
import { ICategory } from 'src/types/category';

function* getAllCategories() {
  try {
    const result: ICategory[] = yield call(api.getAllCategories);
    yield put(getAllCategoriesSuccess(result));
  } catch (e) {
    console.error(e);
    yield put(getAllCategoriesFailed());
  }
}

export function* categorySaga() {
  yield takeLatest(GET_ALL_CATEGORIES, getAllCategories);
}
