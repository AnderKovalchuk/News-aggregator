
import { ICategory } from './../../api/interfaces/news/categories';
import { NewsAction } from './action-dictionary';

export interface NewsState {
  categoriesList: ICategory[]
}

const initialState: NewsState = {
  categoriesList: [],
};

export const newsReducer = (
  state: NewsState = initialState,
  action: any
) => {

  switch(action.type){
    case NewsAction.PUT_CATEGORIES:
      console.log(action);
      return {
        ...state,
        categoriesList: action.data
      };
    default:
      return state;
  }
}