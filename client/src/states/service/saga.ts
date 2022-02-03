import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getServicesByCategoryIdxSuccess,
  getServicesByCategoryIdxFailed,
  GetServicesByCategoryIdxAction,
  getTotalServiceCountSuccess,
  getTotalServiceCountFailed,
  GetTotalServiceCountAction
} from './action';
import api from 'src/apis';
import {
  GET_SERVICES_BY_CATEGORYIDX,
  GET_TOTAL_SERVICE_COUNT
} from './constant';
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

function* getTotalServiceCount({
  type,
  payload
}: {
  type: GetTotalServiceCountAction;
  payload: { categoryIdx: number };
}) {
  try {
    const result: number = yield call(
      api.getTotalServiceCount,
      payload.categoryIdx
    );
    yield put(getTotalServiceCountSuccess(result));
  } catch (e) {
    console.error(e);
    yield put(getTotalServiceCountFailed());
  }
}

export function* serviceSaga() {
  yield takeLatest(GET_SERVICES_BY_CATEGORYIDX, getServicesByCategoryIdx);
  yield takeLatest(GET_TOTAL_SERVICE_COUNT, getTotalServiceCount);
}
