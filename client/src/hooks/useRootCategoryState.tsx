import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/states';
import { ICategory } from 'src/types/category';

type ICategoryOrUndefined = ICategory | undefined;

export default function useRootCategoryState(
  categoryIdx: number
): [
  ICategoryOrUndefined,
  React.Dispatch<React.SetStateAction<ICategoryOrUndefined>>
] {
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

  useEffect(() => {
    if (allCategory.length > 0) {
      getRootCategory();
    }
  }, [allCategory, categoryIdx]);

  return [rootCategory, setRootCategory];
}
