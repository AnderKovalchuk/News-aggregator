
import { ICategory } from './../../api/interfaces/news/categories';
import { NewsAction } from './action-dictionary';

export interface NewsState {
  categoriesTree: ICategory[],
  currentCategory: number,
  path?: number[],
}

const initialState: NewsState = {
  categoriesTree: [],
  currentCategory: 0,
};

export const newsReducer = (
  state: NewsState = initialState,
  action: any
) => {
  switch(action.type){
    case NewsAction.PUT_CATEGORIES:
      return {
        ...state,
        categoriesTree: action.data
      };
    case NewsAction.GO_TO_CATEGORY: 
      
    default:
      return state;
  }
}

