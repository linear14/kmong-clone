import { ICategory } from 'src/types/category';

export const getAllCategories = async () => {
  try {
    const option = {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    };
    const res = await fetch('/category', option);
    if (res.ok) {
      const result: ICategory[] = await res.json();
      return result;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
};
