import {
  GET_SERVICES_BY_CATEGORYIDX,
  GET_SERVICES_BY_CATEGORYIDX_SUCCESS,
  GET_SERVICES_BY_CATEGORYIDX_ERROR,
  INIT_SERVICES,
  GET_TOTAL_SERVICE_COUNT,
  GET_TOTAL_SERVICE_COUNT_SUCCESS,
  GET_TOTAL_SERVICE_COUNT_ERROR
} from './constant';
import produce from 'immer';
import {
  GetServicesByCategoryIdxAction,
  GetTotalServiceCountAction
} from './action';
import { IServiceCard } from 'src/types/service';

interface IServiceCardListState {
  state: {
    loading: boolean;
    error: boolean;
  };
  serviceCardList: IServiceCard[];
}

interface ITotalServiceCountState {
  state: {
    loading: boolean;
    error: boolean;
  };
  count: number;
}

const initServiceCardListState: IServiceCardListState = {
  state: { loading: false, error: false },
  serviceCardList: []
};

const initTotalServiceCount: ITotalServiceCountState = {
  state: { loading: false, error: false },
  count: 0
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

export const totalServiceCount = (
  state = initTotalServiceCount,
  action: GetTotalServiceCountAction
) => {
  switch (action.type) {
    case GET_TOTAL_SERVICE_COUNT: {
      return produce(state, draft => {
        draft.state.loading = true;
      });
    }
    case GET_TOTAL_SERVICE_COUNT_SUCCESS: {
      return produce(state, draft => {
        draft.state.loading = false;
        draft.count = action.payload.count;
      });
    }
    case GET_TOTAL_SERVICE_COUNT_ERROR: {
      return produce(state, draft => {
        draft.state.loading = false;
        draft.count = 0;
        draft.state.error = action.payload.error;
      });
    }
    default:
      return state;
  }
};
