import { allCategories } from '../models/Category/model';

const categoryService = {
  getAllList: function () {
    return allCategories;
  }
};

export default categoryService;
