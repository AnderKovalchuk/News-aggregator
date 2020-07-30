import { combineReducers } from "redux";
import { newsReducer } from "../news";
import { systemReducer } from "../system/system-reducer";

export const rootReducer = combineReducers({
  system: systemReducer,
  news: newsReducer,
});