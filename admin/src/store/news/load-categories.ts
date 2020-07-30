import { NewsAction } from "./action-dictionary"
import { ICategory } from './../../api/interfaces/news/categories';

export const loadCategories = () => {
  return {
    type: NewsAction.LOAD_CATEGORIES,
  };
};

export const putCategories = ( categories: ICategory[] ) => {
  return {
    type: NewsAction.PUT_CATEGORIES,
    data: categories,
  }

}
