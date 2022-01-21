import { combineReducers } from 'redux';
import { categoryList } from './category';

const rootReducer = combineReducers({
  categoryList
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
