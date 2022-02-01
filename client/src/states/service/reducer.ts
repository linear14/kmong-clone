import {
  GET_SERVICES_BY_CATEGORYIDX,
  GET_SERVICES_BY_CATEGORYIDX_SUCCESS,
  GET_SERVICES_BY_CATEGORYIDX_ERROR,
  INIT_SERVICES
} from './constant';
import produce from 'immer';
import { GetServicesByCategoryIdxAction } from './action';
import { IServiceCard } from 'src/types/service';

interface IServiceCardListState {
  state: {
    loading: boolean;
    error: boolean;
  };
  serviceCardList: IServiceCard[];
}

const initServiceCardListState: IServiceCardListState = {
  state: { loading: false, error: false },
  serviceCardList: []
};

export const serviceCardList = (
  state = initServiceCardListState,
  action: GetServicesByCategoryIdxAction
) => {
  switch (action.type) {
    case INIT_SERVICES: {
      return initServiceCardListState;
    }
    case GET_SERVICES_BY_CATEGORYIDX: {
      return produce(state, draft => {
        draft.state.loading = true;
      });
    }
    case GET_SERVICES_BY_CATEGORYIDX_SUCCESS: {
      return produce(state, draft => {
        draft.state.loading = false;
        draft.serviceCardList = action.payload.serviceCardList;
      });
    }
    case GET_SERVICES_BY_CATEGORYIDX_ERROR: {
      return produce(state, draft => {
        draft.state.loading = false;
        draft.serviceCardList = [];
        draft.state.error = action.payload.error;
      });
    }
    default:
      return state;
  }
};
