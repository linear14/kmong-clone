import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/states';
import {
  ICategory,
  ICategoryOrUndefined,
  ICategoryWithUrl
} from 'src/types/category';

export default function useRootCategoryState(
  categoryIdx: number
): [ICategoryOrUndefined, (rootCategory?: ICategory) => ICategoryWithUrl[]] {
  const allCategory = useSelector(
    (state: RootState) => state.categoryList.categories
  );
  const [rootCategory, setRootCategory] = useState<ICategoryOrUndefined>();

  const getRootCategory = useCallback(() => {
    if (allCategory.length > 0) {
      const parent = allCategory.find((item: ICategory) => {
        return (
          item.id === categoryIdx ||
          item.children?.map(child => child.id).includes(categoryIdx)
        );
      });
      setRootCategory(parent);
    }
  }, [allCategory, categoryIdx]);

  const getHistoryFromRoot = useCallback(
    (rootCategory?: ICategory) => {
      const categories: ICategoryWithUrl[] = [{ name: '홈', url: '/' }];
      if (rootCategory) {
        categories.push({
          name: rootCategory.name,
          url: `/category/${rootCategory.id}`
        });

        const currentCategory = rootCategory.children?.filter(
          item => item.id === Number(categoryIdx)
        );
        if (currentCategory && currentCategory.length > 0) {
          categories.push({
            name: currentCategory[0].name,
            url: `/category/${currentCategory[0].id}`
          });
        }
      }
      return categories;
    },
    [categoryIdx]
  );

  useEffect(() => {
    if (allCategory.length > 0) {
      getRootCategory();
    }
  }, [allCategory, categoryIdx]);

  return [rootCategory, getHistoryFromRoot];
}
