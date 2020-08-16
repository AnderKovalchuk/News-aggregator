import { combineReducers } from "redux";
import { operationalDataReducer } from "../operational-data";
import { systemReducer } from "../system";

export const rootReducer = combineReducers({
  system: systemReducer,
  operation: operationalDataReducer,
});