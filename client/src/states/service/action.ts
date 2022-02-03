import {
  INIT_SERVICES,
  GET_SERVICES_BY_CATEGORYIDX,
  GET_SERVICES_BY_CATEGORYIDX_SUCCESS,
  GET_SERVICES_BY_CATEGORYIDX_ERROR,
  GET_TOTAL_SERVICE_COUNT,
  GET_TOTAL_SERVICE_COUNT_SUCCESS,
  GET_TOTAL_SERVICE_COUNT_ERROR
} from './constant';
import { IServiceCard } from 'src/types/service';

/** GET all services by category index */
export const initSerivces = () => ({
  type: INIT_SERVICES
});
export const getServicesByCategoryIdx = (categoryIdx: number) => ({
  type: GET_SERVICES_BY_CATEGORYIDX,
  payload: { categoryIdx }
});
export const getServicesByCategoryIdxSuccess = (result: IServiceCard[]) => ({
  type: GET_SERVICES_BY_CATEGORYIDX_SUCCESS,
  payload: { serviceCardList: result }
});
export const getServicesByCategoryIdxFailed = () => ({
  type: GET_SERVICES_BY_CATEGORYIDX_ERROR,
  payload: { error: true }
});

export type GetServicesByCategoryIdxAction =
  | ReturnType<typeof initSerivces>
  | ReturnType<typeof getServicesByCategoryIdx>
  | ReturnType<typeof getServicesByCategoryIdxSuccess>
  | ReturnType<typeof getServicesByCategoryIdxFailed>;

/** GET total searched service count */
export const getTotalServiceCount = (categoryIdx: number) => ({
  type: GET_TOTAL_SERVICE_COUNT,
  payload: { categoryIdx }
});
export const getTotalServiceCountSuccess = (count: number) => ({
  type: GET_TOTAL_SERVICE_COUNT_SUCCESS,
  payload: { count }
});
export const getTotalServiceCountFailed = () => ({
  type: GET_TOTAL_SERVICE_COUNT_ERROR,
  payload: { error: true }
});

export type GetTotalServiceCountAction =
  | ReturnType<typeof getTotalServiceCount>
  | ReturnType<typeof getTotalServiceCountSuccess>
  | ReturnType<typeof getTotalServiceCountFailed>;
