
import { SystemActionsDictionary } from './_actions.dictionary';
import { ISystemState } from './_state.types';
import * as SystemActions from '../../actions/system';
import { InferValueTypes } from '../store-helper/InferValueTypes';

type SystemActionType = ReturnType<InferValueTypes<typeof SystemActions>>;

const initialState: ISystemState = {
  sidebarShow: true,

  errorLog: [],
};

export const systemReducer = (
  state: ISystemState = initialState,
  action: SystemActionType
): ISystemState => {
  switch( action.type ) {
    case SystemActionsDictionary.CHANGE_SIDEBAR: 
      return {
        ...state,
        sidebarShow: !state.sidebarShow
      };

    case SystemActionsDictionary.PUSH_ERROR_MESSAGE:
      return {
        ...state,
        errorLog: [
          ...state.errorLog, 
          {
            type: "",
            message: action.message,
            time: "",
          }
        ]
      };

    default: 
      return state;
  }
}