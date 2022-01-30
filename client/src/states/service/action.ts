import {
  GET_SERVICES_BY_CATEGORYIDX,
  GET_SERVICES_BY_CATEGORYIDX_SUCCESS,
  GET_SERVICES_BY_CATEGORYIDX_ERROR
} from './constant';
import { IServiceCard } from 'src/types/service';

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
  | ReturnType<typeof getServicesByCategoryIdx>
  | ReturnType<typeof getServicesByCategoryIdxSuccess>
  | ReturnType<typeof getServicesByCategoryIdxFailed>;
