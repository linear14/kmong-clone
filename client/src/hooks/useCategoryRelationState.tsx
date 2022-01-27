import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/states';
import { ICategory } from 'src/types/category';

type ICategoryOrUndefined = ICategory | undefined;

export default function useCategoryRelationState(
  categoryIdx: number
): [
  ICategoryOrUndefined,
  React.Dispatch<React.SetStateAction<ICategoryOrUndefined>>
] {
  const allCategory = useSelector(
    (state: RootState) => state.categoryList.categories
  );
  const [parentCategory, setParentCategory] = useState<ICategoryOrUndefined>();

  const getParentCategory = useCallback(() => {
    if (allCategory.length > 0) {
      const parent = allCategory.find((item: ICategory) => {
        return (
          item.id === categoryIdx ||
          item.children?.map(child => child.id).includes(categoryIdx)
        );
      });
      setParentCategory(parent);
    }
  }, [allCategory, categoryIdx]);

  useEffect(() => {
    if (allCategory.length > 0) {
      getParentCategory();
    }
  }, [allCategory, categoryIdx]);

  return [parentCategory, setParentCategory];
}
