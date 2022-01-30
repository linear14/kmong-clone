import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getServicesByCategoryIdxSuccess,
  getServicesByCategoryIdxFailed,
  GetServicesByCategoryIdxAction
} from './action';
import api from 'src/apis';
import { GET_SERVICES_BY_CATEGORYIDX } from './constant';
import { IServiceCard } from 'src/types/service';

function* getServicesByCategoryIdx({
  type,
  payload
}: {
  type: GetServicesByCategoryIdxAction;
  payload: { categoryIdx: number };
}) {
  try {
    const result: IServiceCard[] = yield call(
      api.getServicesByCategoryIdx,
      payload.categoryIdx
    );
    yield put(getServicesByCategoryIdxSuccess(result));
  } catch (e) {
    console.error(e);
    yield put(getServicesByCategoryIdxFailed());
  }
}

export function* serviceSaga() {
  yield takeLatest(GET_SERVICES_BY_CATEGORYIDX, getServicesByCategoryIdx);
}
