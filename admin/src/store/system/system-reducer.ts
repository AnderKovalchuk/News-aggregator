
import { SidebarAction } from './action-dictionary';
import { ChangeSidebar } from './action-type';
import { SystemState } from './state-type';

const initialState: SystemState = {
  sidebarShow: true,
};

export const systemReducer = (
  state: SystemState = initialState,
  action: ChangeSidebar
): SystemState => {
  switch( action.type ) {
    case SidebarAction.CHANGE_SIDEBAR: 
      return {
        ...state,
        sidebarShow: !state.sidebarShow
      }
    default: 
      return state;
  }
}