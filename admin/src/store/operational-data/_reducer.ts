import { IOPState, OperationalDataActionType } from ".";
import { ODActionsDictionary } from "./_actions.dictionary";
import { ODDataTypes } from "./_data-types.enum";
import { categoryInitialState } from "./initial-state/category.state";
import { newsSourceInitialState } from "./initial-state/news-source.state";


const initialState: IOPState = {
  apiURL: "",
  adminURL: "#",
  dataType: ODDataTypes.UN_ACTIVE,
  dataStore: null,
  currentItem: null,
  tableFields: null,
  isLoadData: false,
}

export const operationalDataReducer = (
  state: IOPState = initialState,
  action: OperationalDataActionType
): IOPState => {
  switch( action.type ){
    case ODActionsDictionary.CHANGE_ACTIVE_SECTION:
      if( state.dataType === action.dataType )
        return state;
      else
        return changeActiveSection( action );

    // case ODActionsDictionary.CLEAR_ACTIVE_DATA:
    //   return {
    //     ...state,
    //     dataStore: null,
    //     currentItem: null,
    //   };
    
    case ODActionsDictionary.PUSH_ITEMS:
      return { 
        ...state,
        dataStore: action.data
      };
    case ODActionsDictionary.PUSH_CURRENT_ITEM: 
      return {
        ...state,
        currentItem: action.data,
      };

    case ODActionsDictionary.SET_LOAD_FLAG :
      return {
        ...state,
        isLoadData: true,
      };
    case ODActionsDictionary.RESET_LOAD_FLAG :
      return {
        ...state,
        isLoadData: false,
      };
    
    default:
      return state;
  }
}

const changeActiveSection = (
  action: OperationalDataActionType
): IOPState => {
  if(action.type !== ODActionsDictionary.CHANGE_ACTIVE_SECTION) 
    return initialState;
  switch (action.dataType) {
    case ODDataTypes.NEWS_SOURCE: 
      return newsSourceInitialState;
    case ODDataTypes.CATEGORY: 
      return categoryInitialState;

    default:
      return initialState;
  }
}

export default operationalDataReducer;
