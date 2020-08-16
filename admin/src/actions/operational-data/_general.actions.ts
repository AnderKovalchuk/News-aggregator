import { ODActionsDictionary, ODDataTypes } from "../../store/operational-data"
import { history } from '../../App';
import { ITableFields } from "../../views/types/table-fields";

export const changeSection = (
  dataType: ODDataTypes,
  tableField?: ITableFields[]
) => {
  if( tableField ){
    return ({
      type: ODActionsDictionary.CHANGE_ACTIVE_SECTION,
      dataType,
      tableField,
    } as const);
  } else {
    return ({
      type: ODActionsDictionary.CHANGE_ACTIVE_SECTION,
      dataType,
    } as const);
  }
}

export const setActionFlag = () => ({
  type: ODActionsDictionary.SET_LOAD_FLAG,
} as const);
export const resetActionFlag = () => ({
  type: ODActionsDictionary.RESET_LOAD_FLAG,
} as const);

export const editODItem = (
  id: number,
  adminURL: string,
) => {
  history.push(`${adminURL}/${id}`);
  return ({ 
    type: ODActionsDictionary.EDIT_ITEM,
    id
  } as const);
}