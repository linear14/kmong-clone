import {
  GET_ALL_CATEGORIES,
  GET_ALL_CATEGORIES_ERROR,
  GET_ALL_CATEGORIES_SUCCESS
} from 'src/constants/ActionTypes';
import { ICategory } from 'src/types/category';

export const getAllCategories = () => ({ type: GET_ALL_CATEGORIES });
export const getAllCategoriesSuccess = (result: ICategory[]) => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload: { categories: result }
});
export const getAllCategoriesFailed = () => ({
  type: GET_ALL_CATEGORIES_ERROR,
  payload: { error: true }
});

export type ActionRequest =
  | ReturnType<typeof getAllCategories>
  | ReturnType<typeof getAllCategoriesSuccess>
  | ReturnType<typeof getAllCategoriesFailed>;
