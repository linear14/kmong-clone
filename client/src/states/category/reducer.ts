import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_ERROR,
  GET_ALL_CATEGORIES_SUCCESS
} from './constant';
import produce from 'immer';
import { GetAllCategoriesAction } from './action';
import { ICategory } from 'src/types/category';

// 해당 인터페이스는 아무리 생각해봐도 여기에서만 사용될 것 같아서 따로 분리하지 않았습니다. (주석 나중에 지우기!)
interface ICategoryListState {
  state: {
    loading: boolean;
    error: boolean;
  };
  categories: ICategory[];
}

const initCategoryListState: ICategoryListState = {
  state: { loading: false, error: false },
  categories: []
};

export const categoryList = (
  state = initCategoryListState,
  action: GetAllCategoriesAction
) => {
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
