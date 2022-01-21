import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_ERROR,
  GET_ALL_CATEGORIES_SUCCESS
} from 'src/constants/ActionTypes';
import produce from 'immer';
import { ActionRequest } from 'src/actions/category';
import { ICategoryState } from 'src/types/category';

const initState: ICategoryState = {
  state: { loading: false, error: false },
  categories: []
};

export const categoryList = (state = initState, action: ActionRequest) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES: {
      return produce(state, draft => {
        draft.state.loading = true;
      });
    }
    case GET_ALL_CATEGORIES_SUCCESS: {
      return produce(state, draft => {
        draft.state.loading = false;
        draft.categories = action.payload.categories;
      });
    }
    case GET_ALL_CATEGORIES_ERROR: {
      return produce(state, draft => {
        draft.state.loading = false;
        draft.categories = [];
        draft.state.error = action.payload.error;
      });
    }
    default:
      return state;
  }
};
