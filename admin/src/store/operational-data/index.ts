import { InferValueTypes } from "../store-helper/InferValueTypes";
import * as OperationalDataActions from '../../actions/operational-data';
import { ODDataTypes } from "./_data-types.enum";

export type OperationalDataActionType = ReturnType<InferValueTypes<typeof OperationalDataActions>>;
export interface IOPState {
  apiURL: string;
  adminURL: string;
  dataType: ODDataTypes;
  dataStore: null | any;
  currentItem: null | any;
  tableFields: any;

  isLoadData: boolean;
}

export { ODDataTypes };
export { ODActionsDictionary } from "./_actions.dictionary"
export { operationalDataReducer } from "./_reducer";

